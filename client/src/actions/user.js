export const setUser = (user) => ({
    type: 'SET_USER',
    payload: {
        id: user.id,
        email: user.email,
        username: user.name,
        dateJoined: user.dateJoined,
    }
});

export const setUserLogin = () => ({
    type: 'SET_USER_LOGIN',
    payload: {
        auth: true
    }
});

export const setUserLogout = () => ({
    type: 'SET_USER_LOGOUT',
    payload: {
        auth: false
    }
})