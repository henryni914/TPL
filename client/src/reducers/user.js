// User reducer is created 

export default function userReducer(state = {
    id: "",
    email: "",
    username: "",
    dateJoined: "",
    authenticated: false
}, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                username: action.payload.username,
                dateJoined: action.payload.dateJoined,
            }
        case 'SET_USER_LOGIN':
            return {
                ...state,
                authenticated: action.payload.auth
            }
        case 'SET_USER_LOGOUT':
            return {
                ...state,
                authenticated: action.payload.auth
            }
        default:
            return state;
    }
}