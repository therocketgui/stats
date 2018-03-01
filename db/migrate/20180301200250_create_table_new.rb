class CreateTableNew < ActiveRecord::Migration[5.1]
  def change
    create_table :cmc_usds do |t|
      t.string :coin_id
      t.string :name
      t.string :symbol
      t.string :type_data
      t.float :data
      t.string :scraped_at

      t.timestamps
    end

    create_table :telegram_members do |t|
      t.string :coin_id
      t.string :name
      t.string :symbol
      t.string :type_data
      t.float :data
      t.string :scraped_at

      t.timestamps
    end

    create_table :twitter_followers do |t|
      t.string :coin_id
      t.string :name
      t.string :symbol
      t.string :type_data
      t.float :data
      t.string :scraped_at

      t.timestamps
    end

    create_table :twitter_tweets do |t|
      t.string :coin_id
      t.string :name
      t.string :symbol
      t.string :type_data
      t.float :data
      t.string :scraped_at

      t.timestamps
    end
  end
end
