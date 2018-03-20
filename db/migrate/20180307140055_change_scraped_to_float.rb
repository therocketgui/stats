class ChangeScrapedToFloat < ActiveRecord::Migration[5.1]
  def change
      def self.up
        change_column :reddits, :scraped_at, :float
      end

      def self.down
        change_column :reddits, :scraped_at, :string
      end
  end
end
