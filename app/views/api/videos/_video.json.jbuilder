json.extract! video, :title, :description, :year, :genre
json.video url_for(video.video_file)