import { createSlice } from '@reduxjs/toolkit'
import { reset } from '../list/slice'

const initialConf = {
    width: {
        id: "width",
        displayName: "W",
        value: 50,
    },
    height: {
        id: "height",
        displayName: "H",
        value: 50,
    },
    borderRadius: {
        id: "border radius",
        displayName: "R",
        value: 10,
    },
    opacity: {
        id: "opacity",
        displayName: "O",
        value: 0.1,
    },
    backgroundColor: {
        id: "background color",
        displayName: "C",
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