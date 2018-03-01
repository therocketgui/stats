class DropTablesOld < ActiveRecord::Migration[5.1]
  def change
    drop_table :cmc_usds
    drop_table :telegram_members
    drop_table :twitter_followers
    drop_table :twitter_tweets
    drop_table :cmc_gbps
    drop_table :cmc_eurs
  end
end
