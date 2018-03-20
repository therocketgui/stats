class ChangeScrapedToFloat2 < ActiveRecord::Migration[5.1]
  def self.up
    change_column :reddits, :scraped_at, 'float USING CAST(scraped_at AS float)', null: false
  end

  def self.down
    change_column :reddits, :scraped_at, 'varchar USING CAST(scraped_at AS varchar)', null: false, default: 0
  end
end
