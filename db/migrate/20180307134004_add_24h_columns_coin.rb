class Add24hColumnsCoin < ActiveRecord::Migration[5.1]
  def change
    add_column :coins, :price_btc_24h, :float

    add_column :coins, :reddit_subscribers_24h, :float
    add_column :coins, :reddit_active_accounts_24h, :float
    add_column :coins, :telegram_members_24h, :float
    add_column :coins, :twitter_followers_24h, :float
    add_column :coins, :twitter_tweets_24h, :float

    add_column :coins, :price_usd_24h, :float
    add_column :coins, :h24_volume_usd_24h, :float
    add_column :coins, :market_cap_usd_24h, :float
  end
end
