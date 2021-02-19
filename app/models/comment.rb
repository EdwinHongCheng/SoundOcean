class Comment < ApplicationRecord
    validates :body, :track_id, :author_id, presence: true

    # [TEST] Goal: render errors for empty body (minimum 1 char long to post comment)
    # [FOR FUN] setting maximum to 20 chars or w/e
    validates :body, length: { minimum: 1 }

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
