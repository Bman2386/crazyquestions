class Api::AnswersController < ApplicationController
     def create
        @answer = Answer.new(q_params)
        @answer.save
        render :show
    end

    def index
        @answers = Answer.where(question_id: question_id).all
        render :index
    end

    def show
        @answer = Answer.find(params[:id])
        render :show
    end

    def destroy
        @answer = Answer.find(params[:id])
        if @answer
            @answer.destroy
        end
        render :show
    end 

    private
    def q_params
        params.require(:answer).permit(:answer, :user_id, :question_id)
    end

    def question_id
        params[:question_id]
    end
end