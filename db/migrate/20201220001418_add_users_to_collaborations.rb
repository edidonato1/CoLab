class AddUsersToCollaborations < ActiveRecord::Migration[6.0]
  def change
    add_column :collaborations, :users, :string, array: true, default: []
  end
end
