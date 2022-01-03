export const createProfile = (profile) => {
    return $.ajax({
        url: '/api/profiles',
        method: 'POST',
        data: {
            profile
        }
    })
}

export const updateProfile = (profile) => {
    return $.ajax({
        url: `/api/profiles/${profile.id}`,
        method: 'PATCH',
        data: {
            profile
        }
    })
}

export const fetchProfiles = () => {
    return $.ajax({
        url: '/api/profiles',
        method: "GET"
    })
}

export const deleteProfile = (profile) => {
    return $.ajax({
        url: `/api/profiles/${profile.id}`,
        method: "DELETE"
    })
}
