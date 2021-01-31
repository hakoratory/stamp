import { createReducer } from '@reduxjs/toolkit'
import { back, next, set } from './actions'

export const stepReducer = createReducer(null, (builder) => {
    builder
        .addCase(back, (state, action) => {
            if(state.stepNumber === -1){
                return state.stepNumber
            }
            return state.stepNumber -= 1
        })
        .addCase(next, (state, action) => {
            if(state.list.length === state.stepNumber + 1){
                return state.stepNumber
            }
            return state.stepNumber += 1
        })
        .addCase(set, (state, action) => {
            return action.payload
        })
})