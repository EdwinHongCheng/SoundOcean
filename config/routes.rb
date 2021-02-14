Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    # sign up
    resource :user, only: [ :create ] 

    # login, logout, show user's login page
    resource :session, only: [ :create, :destroy, :show ]

    # Testing: Track Routes (create, etc)
    resources :tracks, only: [ :index, :show, :create, :update, :destroy ]
  end

  root "static_pages#root"
end
