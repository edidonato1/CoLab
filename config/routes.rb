Rails.application.routes.draw do
  get 'posts/new'
  get 'posts/create'
  get 'posts/update'
  get 'posts/edit'
  get 'posts/destroy'
  get 'posts/index'
  get 'posts/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  resources :media
end
