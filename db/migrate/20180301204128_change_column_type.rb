class ChangeColumnType < ActiveRecord::Migration[5.1]
  def change
    rename_column :telegram_members, :type_data, :type_name
    rename_column :twitter_followers, :type_data, :type_name
    rename_column :twitter_tweets, :type_data, :type_name
    rename_column :cmc_usds, :type_data, :type_name
    rename_column :cmc_raws, :type_data, :type_name
  end
end
