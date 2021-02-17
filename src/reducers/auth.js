import {
    LOAD_USER,
    LOGIN,
    LOGOUT,
    REGISTER,
    AUTH_ERROR,
    CLEAR_ERROR
}
    from '../action/type'
import setAuthToken from './../utils/setAuthToken';
const initState = {
    token: null,
    isAuth: false,
    loading: true,
    user: null,
    error: null
}

export default function authRed(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('token', action.payload)
            setAuthToken(action.payload)
            return {
                ...state,
                token: action.payload.token,
                isAuth: true,
                loading: false
            }
        case AUTH_ERROR:
        case LOGOUT:
        case REGISTER:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuth: false,
                token: null,
                loading: false,
                user: null,
                error: action.payload
            }
        case LOAD_USER: return {
            ...state,
            isAuth: true,
            loading: false,
            user: action.payload
        }
        case CLEAR_ERROR: return {
            ...state,
            error: null
        }
        default:
            return state
    }
}