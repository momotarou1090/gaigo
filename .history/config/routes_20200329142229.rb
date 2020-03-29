Rails.application.routes.draw do
  resources :movie, only: :index
  resources :home, only: :index
  resources :plofile, only: :index
  root to: "home#index"
end
