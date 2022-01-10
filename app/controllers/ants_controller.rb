class AntsController < ApplicationController

    def index
        ants = Ant.all
        render json: ants, include: :user, status: :ok
    end

    def show
        ant = find_ant
        if ant
            render json: ant, include: :user, status: :ok
        else
            render json: {errors: ["Ant not found."]}, status: :not_found
        end
    end

    def create
        ant = Ant.create(ant_params)
        render json: ant, status: :created
    end

    def destroy
        ant = find_ant
        if ant
            ant.destroy
            head :no_content
        else
            render json: { errors: "Ant does not exist."}, status: :not_found
        end
    end

    private

    def ant_params
        params.permit(:queen_name, :species, :number_of_ants, :diet)
    end

    def find_ant
        Ant.find_by(id: params[:id])
    end

end
