Rails.application.routes.draw do
    resources :ants, only: [:index, :show, :create, :update, :destroy]
end
