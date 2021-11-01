class Question < ApplicationRecord

    belongs_to :user,
        foreign_key: :user_id

    has_many :answers,
        foreign_key: :question_id
end
