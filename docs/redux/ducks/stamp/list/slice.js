import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    history: [{
        list: []
    }],
    stepNumber: 0,
}

const listSlice = createSlice({
    name: 'list',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            let history = state.history.slice(0, state.stepNumber + 1)
            let current = history[history.length - 1]
            let list = current.list.slice()

            list.push({
                x: action.payload.x,
                y: action.payload.y,
                number: list.length,
                width: action.payload.currentConf.width.value,
                height: action.payload.currentConf.height.value,
                borderRadius: action.payload.currentConf.borderRadius.value,
                opacity: action.payload.currentConf.opacity.value,
                backgroundColor: action.payload.currentConf.backgroundColor.value
            })
            state.history = history.concat([{
                list: list,
            }])
            state.stepNumber = history.length
        },
        reset: (state, action) => {
            return initialState
        },
        prev: (state, action) => {
            if(state.stepNumber === 0){
                return state
            }
            state.stepNumber -= 1
        },
        next: (state, action) => {
            if(state.history.length === state.stepNumber + 1){
                return state
            }
            state.stepNumber += 1
        },
        set: (state, action) => {
            state.stepNumber = action.payload
        },
    },
})

export const {
    add,
    reset,
    prev,
    next,
    set,
} = listSlice.actions

export default listSlice.reducer

console.log(listSlice.actions)