class Changescrapedtofloattwitter < ActiveRecord::Migration[5.1]
  def self.up
    change_column :twitter_followers, :scraped_at, 'float USING CAST(scraped_at AS float)', null: false
  end

  def self.down
    change_column :twitter_followers, :scraped_at, 'varchar USING CAST(scraped_at AS varchar)', null: false, default: 0
  end

end
