class CreateJoinTableMediaCollaborations < ActiveRecord::Migration[6.0]
  def change
    create_join_table :media, :collaborations do |t|
      # t.index [:medium_id, :collaboration_id]
      # t.index [:collaboration_id, :medium_id]
    end
  end
end
