import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducrer from './reducers'
const middleware = [thunk]
const initialState = {}
const store = createStore(rootReducrer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store