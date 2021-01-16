import { combineReducers } from 'redux'
import stampReducer from './ducks/stamp/stampReducer'
import modalReducer from './ducks/modal/slice'

export const rootReducer = combineReducers({
    stamp: stampReducer,
    modal: modalReducer,
})