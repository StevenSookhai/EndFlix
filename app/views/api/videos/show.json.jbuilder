json.partial! 'api/videos/video', video: @video
# json.thumbnailURL @video.thumbnail.attached? url_for(@video.thumbnail) : ""
json.videoURL url_for(@video.video)
json.thumbnailURL url_for(@video.thumbnail)
