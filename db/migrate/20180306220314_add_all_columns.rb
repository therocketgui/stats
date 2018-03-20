class AddAllColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :coins, :available_supply, :float
    add_column :coins, :total_supply, :float
    add_column :coins, :reddit_subscribers, :float
    add_column :coins, :reddit_active_accounts, :float
    add_column :coins, :telegram_members, :float
    add_column :coins, :twitter_followers, :float
    add_column :coins, :twitter_tweets, :float
  end
end
