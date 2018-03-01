class DropCmcRaws < ActiveRecord::Migration[5.1]
  def change
    drop_table :cmc_raws
  end
end
