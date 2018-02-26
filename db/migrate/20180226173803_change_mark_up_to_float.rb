class ChangeMarkUpToFloat < ActiveRecord::Migration[5.1]
  def change
    change_column :telegram_members, :data, :float
    change_column :twitter_followers, :data, :float
    change_column :twitter_tweets, :data, :float
    change_column :cmc_usds, :data, :float
    change_column :cmc_raws, :data, :float
    change_column :cmc_gbps, :data, :float
    change_column :cmc_eurs, :data, :float
  end
end
