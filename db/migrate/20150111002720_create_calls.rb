class CreateCalls < ActiveRecord::Migration
  def change
    create_table :calls do |t|
      t.string :number
      t.string :note
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
