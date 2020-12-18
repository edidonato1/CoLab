class CreateCollaborations < ActiveRecord::Migration[6.0]
  def change
    create_table :collaborations do |t|
      t.string :title
      t.integer :status
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
