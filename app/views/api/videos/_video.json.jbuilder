json.extract! video, :id, :title, :description, :year, :genre
json.thumbnailURL url_for(video.thumbnail)
json.videoURL url_for(video.video)
