Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "surveys#index"
  resource :sessions, only: [:new, :create, :destroy]
  resources :surveys, only: [:index, :new, :create]
end
