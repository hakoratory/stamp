import { listReducer } from './list/reducer'
import { confReducer } from './conf/reducer'
import { stepReducer } from './step/reducer'
import { createSlice } from '@reduxjs/toolkit'
import { toColor } from 'react-color-palette/lib/utils/toColor'
import { reset as resetOfListAction } from './list/actions'
import { reset as resetOfConfAction } from './conf/actions'

const initialColor = toColor("hex", "#ff8300")

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
            width: 532,
            color: initialColor,
        },
    }
}

const stampSlice = createSlice({
    name: 'stamp',
    initialState: initialState,
    reducers: {
        resetAll: (state, action) => {
            return initialState
        },
        resetList: (state, action) => {
            state.list = listReducer(state.list, resetOfListAction(initialState.list))
        },
        resetConf: (state, action) => {
            state.conf = confReducer(state.conf, resetOfConfAction(initialState.conf))
        },
    },
    extraReducers: (builder) => {
        builder
        .addMatcher(
            (action) => action.type.startsWith('stamp/list'),
            (state, action) => {
                state.list = listReducer(state, action)
            }
        )
        .addMatcher(
            (action) => action.type.startsWith('stamp/step'),
            (state, action) => {
                state.stepNumber = stepReducer(state, action)
            }
        )
        .addMatcher(
            (action) => action.type.startsWith('stamp/conf'),
            (state, action) => {
                state.conf = confReducer(state.conf, action)
            }
        )
    }
})

export const { resetAll, resetList, resetConf } = stampSlice.actions

export default stampSlice.reducer