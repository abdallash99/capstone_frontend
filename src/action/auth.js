import { LOGIN, LOGOUT, REGISTER, AUTH_ERROR, LOAD_USER } from './type';
import { setAlert } from './alert';
import axios from 'axios';
import setAuthToken from './../utils/setAuthToken';
const backendURL = process.env.REACT_APP_BACKEND_URL;
export const login = ({ username, password }, setLoading) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post(`${backendURL}/authenticate`, { username, password }, config)
        console.log(res.data.jwt);
        dispatch({ type: LOGIN, payload: res.data.jwt })
    } catch (err) {
        console.log(err.response)
        dispatch({ type: AUTH_ERROR })
    }
}

export const logout = () => async dispatch => {
    dispatch({ type: LOGOUT })
}


export const signup = (body, setLoading, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = await axios.post(`${backendURL}/signup`, body, config)
        dispatch(setAlert('You have register successfully check your email to vertify it', 'success'));
        dispatch({ type: REGISTER, payload: res.data })
        history.push('/login')
    } catch (err) {
        console.log(err.response)
        setLoading(false)
        dispatch({ type: AUTH_ERROR })
    }
}

export const load = () => async dispatch => {
    setAuthToken(localStorage.getItem('token'))
    try {
        const res = await axios.get(`${backendURL}/auth`);
        dispatch({ type: LOAD_USER, payload: res.data })
    } catch (err) {
        dispatch({ type: AUTH_ERROR })
    }
}
