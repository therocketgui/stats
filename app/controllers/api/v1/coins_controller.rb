 class Api::V1::CoinsController < ActionController::Base

  def index
    coins = Coin.all

    render json: coins
  end

  def search
    # coins = Coin.where(coin_name: CONTAINS params[:search]) ???
    coins = Coin.where('lower(name) LIKE ?', "%#{params[:search]}%".downcase).all
    # coins = Coin.all
    render json: coins
  end

  def searchme
    mycoins_ids = []
    mycoins = MyCoin.where(user_id: params[:user_id])
    mycoins.each do |mycoin|
      mycoins_ids.push(mycoin.coin_id)
    end

    # coins = Coin.where(id: mycoins_ids)

    coins = Coin.where(id: mycoins_ids).where('lower(name) LIKE ?', "%#{params[:search]}%".downcase).all
    # coins = Coin.all
    render json: coins
  end

  def mycoins
    mycoins_ids = []
    mycoins = MyCoin.where(user_id: params[:user_id])
    mycoins.each do |mycoin|
      mycoins_ids.push(mycoin.coin_id)
    end

    coins = Coin.where(id: mycoins_ids)

    render json: coins
  end

  def show
    coin = Coin.where(coin_id: params[:id]).last


    price_btc = CmcRaw.where(["coin_id = ? and type_name = ?", params[:id], "price_btc"]).last
    coin.price_btc = price_btc.data

    available_supply = CmcRaw.where(["coin_id = ? and type_name = ?", params[:id], "available_supply"]).last.data
    total_supply = CmcRaw.where(["coin_id = ? and type_name = ?", params[:id], "total_supply"]).last.data

    price_usd = CmcUsd.where(["coin_id = ? and type_name = ?", params[:id], "price_usd"]).last
    coin.price_usd = price_usd.data
    h24_volume_usd = CmcUsd.where(["coin_id = ? and type_name = ?", params[:id], "24h_volume_usd"]).last
    coin.h24_volume_usd = h24_volume_usd.data
    market_cap_usd = CmcUsd.where(["coin_id = ? and type_name = ?", params[:id], "market_cap_usd"]).last
    coin.market_cap_usd = market_cap_usd.data

    # Add Now() data
    reddit_subscribers = Reddit.where(["coin_id = ? and type_name = ?", params[:id], "reddit_subscribers"]).last
    if (reddit_subscribers)
      coin.reddit_subscribers = reddit_subscribers.data

      # Add 24h from Now() data
      reddit_subscribers_24h = Reddit.where(["coin_id = ? and type_name = ? and scraped_at > ?", params[:id], "reddit_subscribers", reddit_subscribers.scraped_at - 86400]).first
      if (reddit_subscribers_24h)
        coin.reddit_subscribers_24h = reddit_subscribers_24h.data
      end
    end

    reddit_active_accounts = Reddit.where(["coin_id = ? and type_name = ?", params[:id], "reddit_active_accounts"]).last
    if (reddit_active_accounts)
      coin.reddit_active_accounts = reddit_active_accounts.data

      # Add 24h from Now() data
      reddit_active_accounts_24h = Reddit.where(["coin_id = ? and type_name = ? and scraped_at > ?", params[:id], "reddit_active_accounts", reddit_active_accounts.scraped_at - 86400]).first
      if (reddit_active_accounts_24h)
        coin.reddit_active_accounts_24h = reddit_active_accounts_24h.data
      end
    end

    telegram_members = TelegramMember.where(["coin_id = ? and type_name = ?", params[:id], "telegram_members"]).last
    if (telegram_members)
      coin.telegram_members = telegram_members.data

      telegram_members_24h = TelegramMember.where(["coin_id = ? and type_name = ? and scraped_at > ?", params[:id], "telegram_members", telegram_members.scraped_at - 86400]).first
      if (telegram_members_24h)
        coin.telegram_members_24h = telegram_members_24h.data
      end
    end

    twitter_followers = TwitterFollower.where(["coin_id = ? and type_name = ?", params[:id], "twitter_followers"]).last
    if (twitter_followers)
      coin.twitter_followers = twitter_followers.data

      # Add 24h from Now() data
      twitter_followers_24h = TwitterFollower.where(["coin_id = ? and type_name = ? and scraped_at > ?", params[:id], "twitter_followers", twitter_followers.scraped_at - 86400]).first
      if (twitter_followers_24h)
        coin.twitter_followers_24h = twitter_followers_24h.data
      end
    end

    twitter_tweets = TwitterTweet.where(["coin_id = ? and type_name = ?", params[:id], "twitter_tweets"]).last
    if (twitter_tweets)
      coin.twitter_tweets = twitter_tweets.data

      # Add 24h from Now() data
      twitter_tweets_24h = TwitterTweet.where(["coin_id = ? and type_name = ? and scraped_at > ?", params[:id], "twitter_tweets", twitter_tweets.scraped_at - 86400]).first
      if (twitter_tweets_24h)
        coin.twitter_tweets_24h = twitter_tweets_24h.data
      end
    end

    coin.price_btc_24h = CmcRaw.where(["coin_id = ? and type_name = ? and scraped_at > ?", params[:id], "price_btc", price_btc.scraped_at - 86400]).first.data
    coin.price_usd_24h = CmcUsd.where(["coin_id = ? and type_name = ? and scraped_at > ?", params[:id], "price_usd", price_usd.scraped_at - 86400]).first.data
    coin.h24_volume_usd_24h = CmcUsd.where(["coin_id = ? and type_name = ? and scraped_at > ?", params[:id], "24h_volume_usd", h24_volume_usd.scraped_at - 86400]).first.data
    coin.market_cap_usd_24h = CmcUsd.where(["coin_id = ? and type_name = ? and scraped_at > ?", params[:id], "market_cap_usd", market_cap_usd.scraped_at - 86400]).first.data

    render json: [ coin ]
  end

end
