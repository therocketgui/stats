# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180320220810) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cmc_raws", force: :cascade do |t|
    t.string "coin_id"
    t.string "name"
    t.string "symbol"
    t.string "type_name"
    t.float "data"
    t.float "scraped_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cmc_usds", force: :cascade do |t|
    t.string "coin_id"
    t.string "name"
    t.string "symbol"
    t.string "type_name"
    t.float "data"
    t.float "scraped_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "coins", force: :cascade do |t|
    t.string "coin_id"
    t.string "name"
    t.string "symbol"
    t.string "type_name"
    t.string "type_attr"
    t.string "website"
    t.string "github"
    t.string "reddit"
    t.string "twitter"
    t.string "telegram"
    t.string "slack"
    t.string "bitcointalk"
    t.string "explorer"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "price_btc"
    t.float "available_supply"
    t.float "total_supply"
    t.float "reddit_subscribers"
    t.float "reddit_active_accounts"
    t.float "telegram_members"
    t.float "twitter_followers"
    t.float "twitter_tweets"
    t.float "price_usd"
    t.float "h24_volume_usd"
    t.float "market_cap_usd"
    t.float "price_btc_24h"
    t.float "reddit_subscribers_24h"
    t.float "reddit_active_accounts_24h"
    t.float "telegram_members_24h"
    t.float "twitter_followers_24h"
    t.float "twitter_tweets_24h"
    t.float "price_usd_24h"
    t.float "h24_volume_usd_24h"
    t.float "market_cap_usd_24h"
  end

  create_table "events", force: :cascade do |t|
    t.string "name"
    t.string "symbol"
    t.string "event_title"
    t.string "event_description"
    t.string "event_date"
    t.string "event_source"
    t.float "event_timestamp"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "markets", force: :cascade do |t|
    t.string "coin_id"
    t.string "name"
    t.string "symbol"
    t.string "type_name"
    t.float "data"
    t.string "market_name"
    t.string "market_pair"
    t.string "market_website"
    t.float "scraped_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "my_coins", force: :cascade do |t|
    t.integer "coin_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reddits", force: :cascade do |t|
    t.string "coin_id"
    t.string "name"
    t.string "symbol"
    t.string "type_name"
    t.float "data"
    t.float "scraped_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "telegram_members", force: :cascade do |t|
    t.string "coin_id"
    t.string "name"
    t.string "symbol"
    t.string "type_name"
    t.float "data"
    t.float "scraped_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "twitter_followers", force: :cascade do |t|
    t.string "coin_id"
    t.string "name"
    t.string "symbol"
    t.string "type_name"
    t.float "data"
    t.float "scraped_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "twitter_tweets", force: :cascade do |t|
    t.string "coin_id"
    t.string "name"
    t.string "symbol"
    t.string "type_name"
    t.float "data"
    t.float "scraped_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
