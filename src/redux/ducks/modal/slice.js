import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        open: false,
    },
    reducers: {
        modal: (state) => {
            state.open = !state.open
        }
    }
})

export const { modal } = modalSlice.actions

export default modalSlice.reducer