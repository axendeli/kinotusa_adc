Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  resources :categories
  devise_for :users
  resources :posts do
  resources :comments
  end
  get 'about/index'
  get 'promo/index'


  get 'posts/index'
  root 'promo#index'

  get 'promo', to: 'promo#index'
  get 'about', to: 'about#index'



  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :subscribers
end
