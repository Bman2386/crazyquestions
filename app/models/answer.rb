class Answer < ApplicationRecord

    belongs_to :user,
        foreign_key: :user_id

    belongs_to :question,
        foreign_key: :question_id
end
