class Changecolumnname < ActiveRecord::Migration[5.1]
  def change
    rename_column :coins, :type, :type_name
    rename_column :telegram_members, :type, :type_name
    rename_column :twitter_followers, :type, :type_name
    rename_column :twitter_tweets, :type, :type_name
    rename_column :cmc_usds, :type, :type_name
    rename_column :cmc_raws, :type, :type_name
    rename_column :cmc_gbps, :type, :type_name
    rename_column :cmc_eurs, :type, :type_name
  end
end
