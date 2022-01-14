Rails.application.routes.draw do
    resources :ants, only: [:index, :show, :create, :update, :destroy]
    resources :users, only: [:index, :show]

    post "/login", to: "sessions#create"
    get "/me", to: "users#show"

    delete "/logout", to: "sessions#destroy"
end
