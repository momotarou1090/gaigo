Rails.application.routes.draw do
  resources :
  resources :home, only: :index
  resources :plofile, only: :index
  root to: "home#index"
end
