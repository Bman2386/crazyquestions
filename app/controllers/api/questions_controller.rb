class Api::QuestionsController < ApplicationController

    def create
        @question = Question.new(q_params)
        @question.save
        render :show
    end

    def show
        @question = Question.find(params[:id])
        render :show
    end

    def destroy
        @question = Question.find(params[:id])
        if @question
            @question.destroy
        end
        render :show
    end 

    private
    def q_params
        params.require(:question).permit(:question, :user_id)
    end
end