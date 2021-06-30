export const setUser = (user) => ({
    type: 'SET_USER',
    payload: {
        id: user.uid,
        email: user.email,
        username: user.username,
        dateJoined: user.date_created,
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
        id: "",
        email: "",
        username: "",
        dateJoined: "",
        auth: false
    }
})