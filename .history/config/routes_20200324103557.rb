Rails.application.routes.draw do
  resources :home, only: :index
  root to
end
