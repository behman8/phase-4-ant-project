class AntsController < ApplicationController

    def index
        if session[:user_id]
            ants = Ant.all
            render json: ants, include: :user, status: :ok
        else
            render json: {errors: "Must be logged in to view ants."}, status: :unauthorized
        end
    end

    def show
        if session[:user_id]
            ant = Ant.find_by(id: params[:id])
            if ant
                render json: ant, include: :user, status: :ok
            else
                render json: {errors: ["Ant not found."]}
            end
        else
            render json: {errors: "Must be logged in to view ants."}, status: :unauthorized
        end
    end

    def create
        if session[:user_id]
        else
            
        end
    end

    def destroy

    end

end
