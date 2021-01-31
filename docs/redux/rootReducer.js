import { combineReducers } from 'redux'
import stampReducer from './ducks/stamp/stampSlice'
import modalReducer from './ducks/modal/slice'
import clientRectReducer from './ducks/client-rect/slice'

export const rootReducer = combineReducers({
    stamp: stampReducer,
    modal: modalReducer,
    clientRect: clientRectReducer,
})