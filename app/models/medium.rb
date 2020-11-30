class Medium < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_and_belongs_to_many :users
end
