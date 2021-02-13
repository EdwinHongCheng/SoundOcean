class Track < ApplicationRecord
    validates :title, :creator_id, presence: true
    validates :title, uniqueness: { scope: :creator_id }

    # Associations
    belongs_to :creator,
        primary_key: :id,
        foreign_key: :creator_id,
        class_name: :User

    has_many :likes,
        primary_key: :id,
        foreign_key: :track_id,
        class_name: :Like

    # Through Associations
    has_many :likers,
        through: :likes,
        source: :liker
end
