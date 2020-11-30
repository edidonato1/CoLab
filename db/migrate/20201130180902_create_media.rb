class CreateMedia < ActiveRecord::Migration[6.0]
  def change
    create_table :media do |t|
      t.string :name
      t.string :description
      t.string :img_url

      t.timestamps
    end
  end
end
