class AddTimestampsToCoins < ActiveRecord::Migration[5.1]
  def change
    add_column :coins, :created_at, :datetime, null: false
    add_column :coins, :updated_at, :datetime, null: false
  end
end
