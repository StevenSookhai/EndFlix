class User < ApplicationRecord
validates :email, :password_digest, :session_token, presence: true
validates :email, uniqueness: true
validates :password, length: {minimum: 6, allow_nil: true}

attr_reader :password

after_initialize :ensure_session_token

has_many :profiles,
foreign_key: :user_id,
class_name: :Profile


def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
        user
    else 
        nil
    end

end

def is_password?(password)
    pass_object = BCrypt::Password.new(self.password_digest)
    pass_object.is_password?(password)
end

def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
end

def reset_session_token!
    self.session_token = SecureRandom.base64
    self.save!
    self.session_token
end

private 

def ensure_session_token
    self.session_token ||= SecureRandom.base64
end
end
