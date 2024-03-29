class UsersController < ApplicationController

    def index
        users = User.all
        if users
            render json: users, status: :ok
        else
            render json: { errors: "Users not found." }, status: :not_found
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: { errors: "Not authorized" }, status: :unauthorized
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :password_confirmation)
    end

end
