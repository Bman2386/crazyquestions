class Api::GamesController < ApplicationController

    def index
        @games = Games.all
        render :index
    end

    def create
        @game = Game.new(g_params)
        @game.save
        render :show
    end

    def show
        @game = Game.find(params[:id])
        render :show
    end

    def destroy
        @game = Game.find(params[:id])
        if @game
            @game.destroy
        end
        render :show
    end

    private
    def g_params
        params.require(:game).permit(:user_id, :question_id, :name)
    end
        
end