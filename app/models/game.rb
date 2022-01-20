class Game < ApplicationRecord

    belongs_to :users,
        foreign_key: :user_id

    has_many :questions,
        foreign_key: :question_id
end
