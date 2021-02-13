class Like < ApplicationRecord
    validates :liker_id, :track_id, presence: true
    validates :track_id, uniqueness: { scope: :liker_id }

    # Associations
    # NOTE: "Likes" is a joins table (users and track)
    belongs_to :track
        primary_key: :id,
        foreign_key: :track_id,
        class_name: :Track

    belongs_to :liker
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User
end
