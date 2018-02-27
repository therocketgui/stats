Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :coins, only: [ :index, :show]
      resources :cmc_raws, only: [ :index, :show]
      resources :cmc_usds, only: [ :index, :show]
      resources :telegram_members, only: [ :index, :show]
      resources :twitter_followers, only: [ :index, :show]
      resources :twitter_tweets, only: [ :index, :show]
      resources :coins, only: [ :index, :show]
    end
  end

end
