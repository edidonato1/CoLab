class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }

  has_many :posts, dependent: :destroy  
  has_many :colab_posts, dependent: :destroy

  has_and_belongs_to_many :media


  def return_data  # custom return on verification, exclude password 
    {
      id: id,
      img_url: img_url,
      username: username, 
      email: email,
      media: media,
      bio: bio
    }
  end

end
