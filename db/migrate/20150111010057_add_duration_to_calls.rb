class AddDurationToCalls < ActiveRecord::Migration
  def up
    add_column "calls", "duration", :integer
  end
  
  def down
    remove_column "calls", "duration"
  end
end
