Rails.application.routes.draw do
  resources :home, only: :index
  resources :plofile
  root to: "home#index"
end
