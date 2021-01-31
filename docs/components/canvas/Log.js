import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { set } from '../redux/ducks/stamp/list/slice'
import * as selectors from '../../redux/rootSelectors'

export default function Log(){
    const dispatch = useDispatch()
    const history = useSelector(selectors.listSelectors.selectList)

    const jumpTo = (index) => {
        dispatch(set(index))
    }

    const log = history.map((object, index) => {
        const desc = index ?
            'Go to move #' + index :
            'Go to game start'
        
        return (
        <li key={index}>
            <button type="button" onClick={() => jumpTo(index)}>{desc}</button>
        </li>
        )
    })

    return(
        <ol>{log}</ol>
    )
}