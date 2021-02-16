class Track < ApplicationRecord
    validates :title, :creator_id, presence: true
    validates :title, uniqueness: { scope: :creator_id }, length: { minimum: 1 }

    # Assoc to Attach Photo (Cover Art) to a Track
    has_one_attached :cover_art

    # Assoc to Attach Audio File to a Track
    has_one_attached :audio_file

    #-------------------------------------------------------------------------->
    # [TEST] requires an audio track to Upload Successfully
    validate :ensure_audio_file

    def ensure_audio_file
        unless self.audio_file.attached?
            # Error Message: "Please upload an audio file"
            errors[:Please] << "upload an audio file"
        end
    end
    #-------------------------------------------------------------------------->

    # Associations
    belongs_to :creator,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User

    has_many :likes,
        primary_key: :id,
        foreign_key: :track_id,
        class_name: :Like

    has_many :comments,
        primary_key: :id,
        foreign_key: :track_id,
        class_name: :Comment

    # Through Associations
    has_many :likers,
        through: :likes,
        source: :liker
end
