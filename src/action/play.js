import { JOIN_GAME, QUERY, QUERY_WITH_ITEM, QUERY_FAIL, JOIN_FAIL, GAME_START, EXIT_GAME } from './type';
import { setAlert } from './alert';
import axios from 'axios';
const backendURL = process.env.REACT_APP_BACKEND_URL;


export const join = (history) => async dispatch => {
    try {
        const res = await axios.get(`${backendURL}/join`);
        console.log(res.data);
        dispatch({ type: JOIN_GAME, payload: res.data.message })
        dispatch(setAlert(res.data.message, "success"))
        history.push('/waiting')
    } catch (err) {
        console.log(err.response.data.message);
        dispatch({ type: JOIN_FAIL, payload: err.response.data.message })
        dispatch(setAlert(err.response.data.message, "danger"))
    }
}


export const check = (history) => async dispatch => {
    try {
        const res = await axios.get(`${backendURL}/check`);
        dispatch({ type: GAME_START, payload: res.data.message })
        history.push('/game')
    } catch (err) {
        console.log(err.response);
        if (err.response.status !== 404)
            history.push('/waiting')

        dispatch({ type: QUERY_FAIL, payload: err.response.data.message })
    }
}

export const cancel = (history) => async dispatch => {
    try {
        const res = await axios.get(`${backendURL}/exit`);
        dispatch({ type: EXIT_GAME, payload: res.data.message })
        history.push('/')
    } catch (err) {
        console.log(err);
    }
}


export const query = (requestType, history) => async dispatch => {
    try {
        let res;
        if (requestType)
            res = await axios.get(`${backendURL}/query?requestType=${requestType}`);
        else res = await axios.get(`${backendURL}/query`);
        dispatch({ type: QUERY, payload: res.data })
    } catch (err) {
        history.push("/result");
        dispatch(setAlert("Game Is End", "success"))
    }
}


export const queryWithItem = (item, requestType, history) => async dispatch => {
    try {
        const res = await axios.get(`${backendURL}/query_with_item?requestType=${requestType}&itemName=${item}`);
        dispatch({ type: QUERY_WITH_ITEM, payload: res.data })
    } catch (err) {
        history.push("/result");
        dispatch(setAlert("Game Is End", "success"))
    }
}

