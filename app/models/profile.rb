class Profile < ApplicationRecord
    validates :user_id, :name,  presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    has_many :mylists,
    primary_key: :id,
    foreign_key: :profile_id,
    class_name: :Mylist,
    dependent: :destroy
    
    # def self.find_selected_profile(user_id)
    # user = User.find_by(id: profile.user_id)
    # if user && user.is_password?(password)
    #     user
    # else 
    #     nil
    # end


    def self.find_selected_profile( user_id)
        profile = Profile.find_by(selected: true, user_id: user_id)
            if profile  
                return profile 
            else
                nil
            end 
    end 

    def setSelectedProfile 
        self.selected = true
        self.save!
    end 

    def unSelectedProfile 
        self.selected = false
        self.save!
    end 

end
