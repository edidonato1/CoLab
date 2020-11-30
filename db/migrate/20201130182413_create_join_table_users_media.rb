class CreateJoinTableUsersMedia < ActiveRecord::Migration[6.0]
  def change
    create_join_table :users, :media do |t|
      # t.index [:user_id, :medium_id]
      # t.index [:medium_id, :user_id]
    end
  end
end
