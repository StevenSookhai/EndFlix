class Profile < ApplicationRecord
    validates :user_id, :name,  presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User


    # def self.find_selected_profile(user_id)
    # user = User.find_by(id: profile.user_id)
    # if user && user.is_password?(password)
    #     user
    # else 
    #     nil
    # end


end
