class Profile < ApplicationRecord
    validates :user_id, :name,  presence: true

    belong_to :user,
    foreign_key: :user_id,
    class_name: :User
end
