class Video < ApplicationRecord
    validates :title, :description, :year, :genre, presence: true
    validates :title, uniqueness: true
    has_one_attached :video
    has_one_attached :thumbnail
end

