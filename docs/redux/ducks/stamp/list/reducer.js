import { createReducer } from '@reduxjs/toolkit'
import { add, reset } from './actions'

export const listReducer = createReducer(null, (builder) => {
    builder
        .addCase(add, (state, action) => {
            let list = state.list.slice(0, state.stepNumber + 1)
            list.push({
                x: action.payload.x,
                y: action.payload.y,
                number: list.length,
                width: state.conf.width.value,
                height: state.conf.height.value,
                borderRadius: state.conf.borderRadius.value,
                opacity: state.conf.opacity.value,
                backgroundColor: state.conf.backgroundColor.value,
                rotate: state.conf.rotate.value,
            })
            return list
        })
        .addCase(reset, (state, action) => {
            return action.payload
        })
})