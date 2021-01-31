import { createReducer } from '@reduxjs/toolkit'
import {
    changeWidth,
    changeHeight,
    changeBorderRadius,
    changeRotate,
    changeOpacity,
    changeBackgroundColor,
    reset,
} from './actions'
export const confReducer = createReducer(null, (builder) => {
    builder
        .addCase(changeWidth, (state, action) => {
            state.width.value = action.payload.value
        })
        .addCase(changeHeight, (state, action) => {
            state.height.value = action.payload.value
        })
        .addCase(changeBorderRadius, (state, action) => {
            state.borderRadius.value = action.payload.value
        })
        .addCase(changeRotate, (state, action) => {
            state.rotate.value = action.payload.value
        })
        .addCase(changeOpacity, (state, action) => {
            state.opacity.value = action.payload.value
        })
        .addCase(changeBackgroundColor, (state, action) => {
            state.backgroundColor.value = action.payload.hex
            state.backgroundColor.color = action.payload
        })
        .addCase(reset, (state, action) => {
            return action.payload
        })
})