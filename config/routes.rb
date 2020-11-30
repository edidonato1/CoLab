Rails.application.routes.draw do
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users

  put '/users/:id', to: 'users#add_medium' 

  resources :media do
    resources :posts
  end

end
