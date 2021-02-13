class Comment < ApplicationRecord
    validates :body, :track_id, :author_id, presence: true

    # Associations
    belongs_to :track,
        primary_key: :id,
        foreign_key: :track_id,
        class_name: :Track

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

end
