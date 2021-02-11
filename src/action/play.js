import { JOIN_GAME, QUERY, QUERY_WITH_ITEM, QUERY_FAIL, JOIN_FAIL, GAME_START, EXIT_GAME } from './type';
import { setAlert } from './alert';
import axios from 'axios';
const backendURL = process.env.REACT_APP_BACKEND_URL;


export const join = () => async dispatch => {
    try {
        const res = await axios.get(`${backendURL}/join`);
        console.log(res.data);
        dispatch({ type: JOIN_GAME, payload: res.data.message })
        dispatch(setAlert(res.data.message, "success"))
    } catch (err) {
        console.log(err.response.data.message);
        dispatch({ type: JOIN_FAIL, payload: err.response.data.message })
        dispatch(setAlert(err.response.data.message, "danger"))
    }
}


export const check = (history, setLoading) => async dispatch => {
    try {
        const res = await axios.get(`${backendURL}/check`);
        dispatch({ type: GAME_START, payload: res.data.message })
        history.push('/game')
    } catch (err) {
        console.log(err.response);
        if (err.response.status === 404)
            setLoading(false)
        else setLoading(true)
        dispatch({ type: QUERY_FAIL, payload: err.response.data.message })
    }
}

export const cancel = (history, setLoading) => async dispatch => {
    try {
        const res = await axios.get(`${backendURL}/exit`);
        dispatch({ type: EXIT_GAME, payload: res.data.message })
        setLoading(false);
        history.push('/')
    } catch (err) {
        console.log(err);
    }
}


export const query = (requestType, stLoading) => async dispatch => {
    try {
        const res = await axios.get(`${backendURL}/query?requestType=${requestType}&`);
        stLoading(false);
        dispatch({ type: QUERY, payload: res.data })
    } catch (err) {
        console.log(err.response.data.message);
        stLoading(false);
        dispatch({ type: QUERY_FAIL, payload: err.response.data.message })
    }
}


export const queryWithItem = (item, requestType, stLoading) => async dispatch => {
    try {
        const res = await axios.get(`${backendURL}/query?requestType=${requestType}&itemName=${item}`);
        stLoading(false);
        dispatch({ type: QUERY_WITH_ITEM, payload: res.data })
    } catch (err) {
        console.log(err.response.data.message);
        stLoading(false);
        dispatch({ type: QUERY_FAIL, payload: err.response.data.message })
    }
}

