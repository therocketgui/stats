class TableMarket < ActiveRecord::Migration[5.1]
  def change
    create_table :markets do |t|

      t.string :coin_id
      t.string :name
      t.string :symbol
      t.string :type_name
      t.float :data
      t.string :market_name
      t.string :market_pair
      t.string :market_website
      t.float :scraped_at

      t.timestamps
    end
  end
end
