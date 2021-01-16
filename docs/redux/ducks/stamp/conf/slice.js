import { createSlice } from '@reduxjs/toolkit'
import { reset } from '../list/slice'

const initialConf = {
    width: {
        id: "width",
        value: 50,
        step: 1,
        max: 300,
    },
    height: {
        id: "height",
        value: 50,
        step: 1,
        max: 300,
    },
    borderRadius: {
        id: "border radius",
        value: 10,
        step: 1,
        max: 150,
    },
    opacity: {
        id: "opacity",
        value: 0.1,
        step: 0.1,
        max: 1,
    },
    backgroundColor: {
        id: "background color",
        value: "#ff8300",
        width: "100%"
    },
}

const confSlice = createSlice({
    name: 'conf',
    initialState: initialConf,
    reducers: {
        changeWidth: (state, action) => {
            state.width.value = action.payload.value
        },
        changeHeight: (state, action) => {
            state.height.value = action.payload.value
        },
        changeBorderRadius: (state, action) => {
            state.borderRadius.value = action.payload.value
        },
        changeOpacity: (state, action) => {
            state.opacity.value = action.payload.value
        },
        changeBackgroundColor: (state, action) => {
            state.backgroundColor.value = action.payload.value
        },
    },extraReducers: (builder) => {
        builder.addCase(reset, (state, action) => {
            return initialConf
        })
    },
})

export const {
    changeWidth,
    changeHeight,
    changeBorderRadius,
    changeOpacity,
    changeBackgroundColor,
} = confSlice.actions

export default confSlice.reducer

console.log(confSlice.actions)