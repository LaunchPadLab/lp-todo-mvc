Rails.application.routes.draw do
  root to: "pages#home"

  resources :todos, only: [:index, :create, :update, :destroy]

  patch '/todos/:id/toggle_complete', to: "todos#toggle_complete"
  patch '/todos/:id/update_text', to: "todos#update_text"
end
