Rails.application.routes.draw do
  root to: "pages#home"

  resources :todos, only: [:create, :update]
end
