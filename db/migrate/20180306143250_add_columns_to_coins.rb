class AddColumnsToCoins < ActiveRecord::Migration[5.1]
  def change
    add_column :coins, :price_btc, :float
  end
end
