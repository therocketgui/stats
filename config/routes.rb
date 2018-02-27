Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :coins, only: [ :index, :show]

      # resources :cmc_raws, only: [:show]
      resources :cmc_raws do
        collection do
          get 'coin/data/:id' => 'cmcraws#show'
        end
      end

      resources :cmc_usds do
        collection do
          get 'coin/trade/:id' => 'cmcusds#show'
        end
      end

      resources :telegram_members do
        collection do
          get 'coin/telegram/members/:id' => 'telegrammembers#show'
        end
      end

      resources :twitter_followers do
        collection do
          get 'coin/twitter/followers/:id' => 'twitterfollowers#show'
        end
      end

      resources :twitter_tweets do
        collection do
          get 'coin/twitter/tweets/:id' => 'twittertweets#show'
        end
      end

    end
  end

end
