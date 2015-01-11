class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :fullname
      t.string :login
      t.string :password
      t.string :extension

      t.timestamps null: false
    end
  end
end
