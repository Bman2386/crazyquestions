class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
          login!(@user)
          render :show
        else
          render json: @user.errors.full_messages, status: 401
        end
    end

     def show
        @user = User.find(params[:id])
        render :show
    end

    def update
        @user =  User.find(params[:id])
        if @user && @user.update_attributes(user_params)
          render :show
        elsif !@user
          render json: ['Could not locate user'], status: 400
        else
          render json: @user.errors.full_messages, status: 401
        end
    end

    private
    def user_params
        params.require(:user).permit(
            :username,
            :password)
    end
end