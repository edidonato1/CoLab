class Collaboration < ApplicationRecord
  belongs_to :user
  has_many :colab_posts, dependent: :destroy
  has_and_belongs_to_many :media
end
