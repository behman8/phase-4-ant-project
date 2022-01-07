Rails.application.routes.draw do
  scope :api do
    resources :ants
    resources :users
    get "/login", to: "sessions#create"
    get "/logout", to: "sessions#destroy"
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
