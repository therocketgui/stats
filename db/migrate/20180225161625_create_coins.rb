class CreateCoins < ActiveRecord::Migration[5.1]
  def change
    create_table :coins do |t|
      t.string :coin_id
      t.string :name
      t.string :symbol
      t.string :type
      t.string :type_attr
      t.string :website
      t.string :github
      t.string :reddit
      t.string :twitter
      t.string :telegram
      t.string :slack
      t.string :bitcointalk
      t.string :explorer
    end
  end
end
