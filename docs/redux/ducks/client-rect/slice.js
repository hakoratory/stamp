import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    header: {
        width: 0,
        height: 0,
    },
    footer: {
        width: 0,
        height: 0,
    }
}

const clientRectSlice = createSlice({
    name: 'clientRect',
    initialState: initialState,
    reducers: {
        initHeader: (state, action) => {
            state.header.width = action.payload.width
            state.header.height = action.payload.height
        },
        initFooter: (state, action) => {
            state.footer.width = action.payload.width
            state.footer.height = action.payload.height
        }
    }
})

export const { initHeader, initFooter } = clientRectSlice.actions

export default clientRectSlice.reducer