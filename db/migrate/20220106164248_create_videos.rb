class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.string :genre, null: false
      t.text :description, null: false
      t.integer :year, null: false
      t.timestamps
    end
    add_index :videos, :title, unique: true
  end
end
