export const setUser = (user) => ({
    type: 'SET_USER',
    payload: {
        id: user.id,
        email: user.email,
        username: user.name,
        dateJoined: user.dateJoined,
    }
});