# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_20_001418) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "colab_posts", force: :cascade do |t|
    t.text "content"
    t.bigint "user_id", null: false
    t.bigint "collaboration_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["collaboration_id"], name: "index_colab_posts_on_collaboration_id"
    t.index ["user_id"], name: "index_colab_posts_on_user_id"
  end

  create_table "collaborations", force: :cascade do |t|
    t.string "title"
    t.integer "status"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "users", default: [], array: true
    t.index ["user_id"], name: "index_collaborations_on_user_id"
  end

  create_table "collaborations_media", id: false, force: :cascade do |t|
    t.bigint "medium_id", null: false
    t.bigint "collaboration_id", null: false
  end

  create_table "collaborations_users", id: false, force: :cascade do |t|
    t.bigint "collaboration_id", null: false
    t.bigint "user_id", null: false
  end

  create_table "media", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "img_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "media_users", id: false, force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "medium_id", null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string "subject"
    t.text "content"
    t.integer "user_id", null: false
    t.integer "medium_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["medium_id"], name: "index_posts_on_medium_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "img_url"
    t.string "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "colab_posts", "collaborations"
  add_foreign_key "colab_posts", "users"
  add_foreign_key "collaborations", "users"
  add_foreign_key "posts", "media"
  add_foreign_key "posts", "users"
end
