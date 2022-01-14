export const createListItem = (videoId, profileId) => {
    // debugger
    return $.ajax({
        method: 'POST',
        url: `api/mylists`,
        data: {
            mylist: {
                video_id: videoId,
                profile_id: profileId
            }
        }
    })
}
export const fetchlists = () => {
    return $.ajax({
        url: '/api/mylists',
        method: "GET"
    })
}
export const deleteMylist= (mylistId) => {
    // debugger
    return $.ajax({
        method: 'DELETE',
        url: `/api/mylists/${mylistId}`
    })
}



