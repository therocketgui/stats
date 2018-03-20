Rails.application.routes.draw do
  devise_for :users

  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/coins/me/:userid", to: "pages#app"
  get "/coin/me/:userid", to: "pages#app"
  get "/coins", to: "pages#app"
  get "/coins/:id", to: "pages#app"
  get "/coins/:id/:type", to: "pages#app"
  get "/coins/:id/:type/:channel/:metric", to: "pages#app"

  # API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :my_coins, only: [ :show ] do
        collection do
          get 'delete/:user_id/:id' => 'my_coins#destroy'
          get 'create/:user_id/:coin_id' => 'my_coins#create'
        end
      end
      resources :coins, only: [ :index, :show] do
        collection do
          get 'me/:user_id' => 'coins#mycoins'
          get 'search/:search' => 'coins#search'
          get 'search/:user_id/:search' => 'coins#  '
        end
      end
      resources :cmc_raws, only: [ :index, :show] do
        collection do
          get 'price_btc/:id' => 'cmc_raws#price_btc'
        end
      end
      resources :cmc_usds, only: [ :index, :show] do
        collection do
          get 'price_usd/:id' => 'cmc_usds#price_usd'
          get 'h24_volume_usd/:id' => 'cmc_usds#h24_volume_usd'
          get 'market_cap_usd/:id' => 'cmc_usds#market_cap_usd'
        end
      end
      resources :telegram_members, only: [ :index, :show]
      resources :twitter_followers, only: [ :index, :show]
      resources :twitter_tweets, only: [ :index, :show]
      resources :reddits, only: [ :index, :show] do
        collection do
          get 'active/:id' => 'reddits#show_active'
          get 'subscribers/:id' => 'reddits#show_subscribers'
        end
      end
      resources :markets, only: [ :index ]
    end
  end

end
