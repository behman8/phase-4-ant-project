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
            ant = find_ant
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
            ant = Ant.create(ant_params)
            render json: ant, status: :created
        else
            render json: { errors: "Could not create Ant."}, status: :unprocessable_entity
        end
    end

    def destroy
        if session[:user_id]
            ant = find_ant
            if ant
                ant.destroy
                head :no_content
            else
                render json: { errors: "Ant does not exist."}, status: :not_found
            end
        end
    end

    private

    def ant_params
        params.permit(:queen_name, :species, :number_of_ants, :diet)
    end

    def find_ant
        Ant.find(params[:id])
    end

end
