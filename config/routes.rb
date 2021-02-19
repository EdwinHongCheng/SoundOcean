Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    
    # sign up + show user (for user page)
    # [TEST] adding update
    resources :users, only: [ :create, :show, :update ] 

    # login, logout, show user's login page
    resource :session, only: [ :create, :destroy, :show ]

    # Track Routes (create, etc)
    resources :tracks, only: [ :index, :show, :create, :update, :destroy ]

    # Comment Routes (just Create + Destroy for now)
    resources :comments, only: [ :create, :destroy ]
  end

  root "static_pages#root"
end
