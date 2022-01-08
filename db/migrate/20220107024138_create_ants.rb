class CreateAnts < ActiveRecord::Migration[6.1]
  def change
    create_table :ants do |t|
      t.string :queen_name
      t.string :species
      t.integer :number_of_ants
      t.string :diet
      t.belongs_to :user, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
