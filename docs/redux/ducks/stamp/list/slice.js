import { createSlice } from '@reduxjs/toolkit'

const listSlice = createSlice({
    name: 'list',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({
                x: action.payload.x,
                y: action.payload.y,
                number: state.length,
                width: action.payload.currentConf.width.value,
                height: action.payload.currentConf.height.value,
                borderRadius: action.payload.currentConf.borderRadius.value,
                opacity: action.payload.currentConf.opacity.value,
                backgroundColor: action.payload.currentConf.backgroundColor.value
            })
            return state
        },
        reset: () => {
            return []
        },
        back: (state, action) => {
            state.pop()
        }
    },
})

export const {
    add,
    reset,
    back,
} = listSlice.actions

export default listSlice.reducer

console.log(listSlice.actions)