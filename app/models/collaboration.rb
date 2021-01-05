class Collaboration < ApplicationRecord
  has_many :colab_posts, dependent: :destroy
  belongs_to :user
  has_and_belongs_to_many :users
  has_and_belongs_to_many :media
end
