class AddEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :symbol
      t.string :event_title
      t.string :event_description
      t.string :event_date
      t.string :event_source
      t.float :event_timestamp
      t.timestamps
    end
  end
end
