import { combineReducers } from 'redux'
import authRed from './auth'
import alert from './alert'
export default combineReducers({
    auth: authRed,
    alert,
})