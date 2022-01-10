json.partial! 'api/videos/video', video: @video
json.videoURL url_for(@video.video)
json.thumbnailURL url_for(@video.thumbnail)
