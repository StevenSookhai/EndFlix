json.extract! video, :title, :description, :year, :genre
json.videoURL url_for(video.video)
json.thumbnailURL url_for(video.thumbnail)
