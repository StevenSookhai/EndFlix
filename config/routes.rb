Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :profiles,only: [:create,:update,:destroy,:index]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
