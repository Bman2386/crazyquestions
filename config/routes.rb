Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :update, :destoy]
    resources :questions, only: [:create, :show, :index]
    resources :answers, only: [:index, :new, :create, :show, :update]
    resource :session, only: [:create, :destroy]
  end
  root to: 'root#root'
end