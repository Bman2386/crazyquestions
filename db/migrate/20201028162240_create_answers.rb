class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|

      t.string :body
      t.integer :user_id
      t.integer :question_id
    end
  end
end
