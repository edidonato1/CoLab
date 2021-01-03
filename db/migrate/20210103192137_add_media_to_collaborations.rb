class AddMediaToCollaborations < ActiveRecord::Migration[6.0]
  def change
    add_column :collaborations, :media, :string, array: true, default: []
  end
end
