class CreateReddits < ActiveRecord::Migration[5.1]
  def change
    create_table :reddits do |t|

      t.string :coin_id
      t.string :name
      t.string :symbol
      t.string :type_name
      t.float :data
      t.string :scraped_at

      t.timestamps
    end
  end
end
