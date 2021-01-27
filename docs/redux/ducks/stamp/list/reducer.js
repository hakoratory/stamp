import { createReducer } from '@reduxjs/toolkit'
import { add, testStamp } from './actions'

export const listReducer = createReducer(null, (builder) => {
    console.log('test')
    builder
        .addCase(add, (state, action) => {
            //console.log('listReducer add')
            let list = state.list.slice(0, state.stepNumber + 1)
            list.push({
                x: action.payload.x,
                y: action.payload.y,
                number: list.length,
                width: state.conf.width.value,
                height: state.conf.height.value,
                borderRadius: state.conf.borderRadius.value,
                opacity: state.conf.opacity.value,
                backgroundColor: state.conf.backgroundColor.value
            })
            return list
        })
        .addCase(testStamp, (state, action) => {
            let list = state.list.slice(0, state.stepNumber + 1)
            for(let i = 0; i < 5000; i++){
                list.push({
                    x: 100 + i,
                    y: 150,
                    number: list.length,
                    width: 50,
                    height: 50,
                    borderRadius: 15,
                    opacity: 0.1,
                    backgroundColor: "#ff8300"
                })
            }
            return list
        })
})