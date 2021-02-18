class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            log_in(@user)
            render :create
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    # [TEST] show user (after changing routes to resources :users)
    def show
        @user = User.find(params[:id])
        if @user
            render :show
        else
            render json: ['User does not exist'], status: 422
        end
    end


    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

end
