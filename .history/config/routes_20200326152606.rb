Rails.application.routes.draw do
  resources :home, only: :index
  resources :
  root to: "home#index"
end
