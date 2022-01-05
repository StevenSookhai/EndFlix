class Addbooleantoprofilestable < ActiveRecord::Migration[6.1]
  def change
    add_column :profiles, :selected, :boolean, default: false
  end
end
