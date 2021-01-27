import { createReducer } from '@reduxjs/toolkit'
import { back, next, set } from './actions'

export const stepReducer = createReducer(null, (builder) => {
    builder
        .addCase(back, (state, action) => {
            //console.log('back')
            if(state.stepNumber === -1){
                return state.stepNumber
            }
            return state.stepNumber -= 1
        })
        .addCase(next, (state, action) => {
            //console.log('next')
            if(state.list.length === state.stepNumber + 1){
                return state.stepNumber
            }
            return state.stepNumber += 1
        })
        .addCase(set, (state, action) => {
            //console.log('set')
            return action.payload
        })
})