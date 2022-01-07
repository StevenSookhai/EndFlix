json.partial! 'api/videos/video', video: @video
json.video url_for(@video.video_file)
