class User < ApplicationRecord
    validates :first_name, :last_name, presence: true, length: { maximum: 50 }
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    validates :email, presence: true, uniqueness: true, length:{ maximum: 200 }, format: { with: VALID_EMAIL_REGEX }
    has_secure_password
    validates: password, presence: true, length: { maximum: 8 }
end
