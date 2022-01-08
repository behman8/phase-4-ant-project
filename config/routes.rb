Rails.application.routes.draw do
    resources :ants, only: [:index, :create, :update, :destroyf]
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
end
