Rails.application.routes.draw do
    resources :ants, only: [:index, :create, :update, :destroy]
end
