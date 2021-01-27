import { createReducer } from '@reduxjs/toolkit'
import {
    changeWidth,
    changeHeight,
    changeBorderRadius,
    changeOpacity,
    changeBackgroundColor,
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
        .addCase(changeOpacity, (state, action) => {
            state.opacity.value = action.payload.value
        })
        .addCase(changeBackgroundColor, (state, action) => {
            state.backgroundColor.value = action.payload.value
        })
})