export const fetchAllVideos = () => {

    return $.ajax({
        method: 'GET',
        url: '/api/videos',
    })
}

export const fetchVideo = (videoId) => {

    return $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}`
    })
}