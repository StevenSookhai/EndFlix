export const signup = (user) => {
    
    return $.ajax({
        
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
}
export const login = (user) => {

    return $.ajax({
        method: 'POST',
        url: `api/session`,
        data: { user }
    })
};

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: `api/session`
    })
);

export const findProfile = (profile) => {
    // debugger
    return $.ajax({
        method: 'post',
        url: '/api/profile_session',
        data: { profile }
    })
}