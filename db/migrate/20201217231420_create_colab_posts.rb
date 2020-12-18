class CreateColabPosts < ActiveRecord::Migration[6.0]
  def change
    create_table :colab_posts do |t|
      t.text :content
      t.references :user, null: false, foreign_key: true
      t.references :collaboration, null: false, foreign_key: true

      t.timestamps
    end
  end
end
