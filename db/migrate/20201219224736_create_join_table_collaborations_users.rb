class CreateJoinTableCollaborationsUsers < ActiveRecord::Migration[6.0]
  def change
    create_join_table :collaborations, :users do |t|
      # t.index [:collaboration_id, :user_id]
      # t.index [:user_id, :collaboration_id]
    end
  end
end
