class User < ApplicationRecord
    
    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    # Get email error for Sign In/Create Account Modal
    validates :email, length: { minimum: 1 }, allow_nil: true, uniqueness: true

    attr_reader :password


    # Associations
    has_many :tracks,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :Track

    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like

    has_many :comments,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Comment

    
    # Through Associations
    has_many :liked_tracks,
        through: :likes,
        source: :track
    
        

    # (A)SPIRE ------------------------------------------------>
    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?

        if user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end
    
end
