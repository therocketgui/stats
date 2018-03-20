class AddAllColumns2 < ActiveRecord::Migration[5.1]
  def change
    add_column :coins, :price_usd, :float
    add_column :coins, :h24_volume_usd, :float
    add_column :coins, :market_cap_usd, :float
  end
end
