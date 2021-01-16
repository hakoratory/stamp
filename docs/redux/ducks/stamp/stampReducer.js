import { combineReducers } from 'redux'
import listReducer from './list/slice'
import confReducer from './conf/slice'

export default combineReducers({
    list: listReducer,
    conf: confReducer,
})