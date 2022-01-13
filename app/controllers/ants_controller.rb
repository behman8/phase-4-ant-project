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
            render json: {errors: "Ant not found."}, status: :not_found
        end
    end

    def create
        ant = Ant.create(ant_params)
        if ant
            render json: ant, include: :user, status: :created
        else
            render json: { errors: "Could not create ant." }, status: :unprocessable_entity
        end
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
        params.require(:ant).permit(:queen_name, :species, :number_of_ants, :diet, :user_id)
    end

    def find_ant
        Ant.find_by(id: params[:id])
    end

end
