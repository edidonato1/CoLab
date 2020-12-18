Rails.application.routes.draw do
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users 

  put 'media/:medium_id/users/:id', to: 'users#add_medium' 

  patch 'media/:medium_id/users/:id', to: 'users#remove_medium'


  resources :collaborations do 
    resources :colab_posts
  end

  resources :media do
    resources :posts
  end

  resources :posts, only: [:show, :update, :destroy]

end
