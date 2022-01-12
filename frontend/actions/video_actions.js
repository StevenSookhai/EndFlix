import * as VideoUtil from '../util/video_util'

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS"
export const RECEIVE_VIDEO = "RECEIVE_VIDEO"

export const receiveAllVideos = (videos) => {
    return {
        type: RECEIVE_ALL_VIDEOS,
        videos
    }
}
export const receiveVideo = (video) => {
    return {
        type: RECEIVE_VIDEO,
        video
    }
}

export const fetchAllVideos = () => dispatch => VideoUtil.fetchAllVideos()
    .then(videos => dispatch(receiveAllVideos(videos)))

export const fetchVideo = (videoId) => dispatch => VideoUtil.fetchVideo(videoId)
    .then(video => dispatch(receiveVideo(video)))