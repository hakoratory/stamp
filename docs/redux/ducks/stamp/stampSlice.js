import { listReducer } from './list/reducer'
import { confReducer } from './conf/reducer'
import { stepReducer } from './step/reducer'
import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    list: [],
    stepNumber: 0,
    conf: {
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
            displayName: "BR",
            value: 10,
        },
        rotate: {
            id: "rotate",
            displayName: "R",
            value: 0,
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
}

const stampSlice = createSlice({
    name: 'stamp',
    initialState: initialState,
    reducers: {
        reset: (state, action) => {
            console.log('reset')
            return initialState
        }
    },
    extraReducers: (builder) => {
        builder
        .addMatcher(
            (action) => action.type.startsWith('stamp/list'),
            (state, action) => {
                //console.log('stamp/list matched')
                state.list = listReducer(state, action)
            }
        )
        .addMatcher(
            (action) => action.type.startsWith('stamp/step'),
            (state, action) => {
                //console.log('stamp/step matched')
                state.stepNumber = stepReducer(state, action)
            }
        )
        .addMatcher(
            (action) => action.type.startsWith('stamp/conf'),
            (state, action) => {
                //console.log('stamp/conf matched')
                state.conf = confReducer(state.conf, action)
            }
        )
    }
})

export const { reset } = stampSlice.actions

export default stampSlice.reducer