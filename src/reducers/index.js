import { combineReducers } from 'redux'
import authRed from './auth'
import alert from './alert'
import game from './game'
export default combineReducers({
    auth: authRed,
    alert,
    game
})