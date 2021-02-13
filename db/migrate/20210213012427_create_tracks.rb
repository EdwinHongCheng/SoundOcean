class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.integer :creator_id, null: false

      t.timestamps
    end

    add_index :tracks, [:creator_id, :title], unique: true
    add_index :tracks, :title
  end
end
