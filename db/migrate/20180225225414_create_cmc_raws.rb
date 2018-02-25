class CreateCmcRaws < ActiveRecord::Migration[5.1]
  def change
    create_table :cmc_raws do |t|
      t.string :coin_id
      t.string :name
      t.string :symbol
      t.string :type
      t.integer :data
      t.string :scraped_at

      t.timestamps
    end
  end
end
