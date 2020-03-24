Rails.application.routes.draw do
  resources :home, only: :add_index :table_name, :column_name, options: "custom_index_name"
  #Ex:- add_index("admin_users", "username")
end
