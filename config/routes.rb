Rails.application.routes.draw do
  scope :api do
    resources :ants, only: [:index, :create]
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/sessions", to: "sessions#create"
    delete "/sessions", to: "sessions#destroy"
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
