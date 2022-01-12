class Mylist < ApplicationRecord
    validates :profile_id, :video_id, presence: true
    validates :profile_id, uniqueness: {scope: :video_id}

    belongs_to :profile,
        primary_key: :id, 
        foreign_key: :profile_id,
        class_name: :Profile
end
