class Track < ApplicationRecord
    validates :title, :creator_id, presence: true
    validates :title, uniqueness: { scope: :creator_id }, length: { minimum: 1 }

    # Association to Attach Photo (Cover Art) to a Track
    has_one_attached :cover_art

    # [TEST] Assoc to Attach Audio File to a Track
    has_one_attached :audio_file


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
