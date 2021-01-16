import React from 'react'
import './static/css/App.css'
import Header from './header/Header'
import { Grid } from '@material-ui/core'
import Palette from './palette/Palette'
import Canvas from './canvas/Canvas'
import {
    add,
    reset,
} from './redux/ducks/stamp/list/slice'
import {
    changeWidth,
    changeHeight,
    changeBorderRadius,
    changeOpacity,
    changeBackgroundColor,
} from './redux/ducks/stamp/conf/slice'
import { modal } from './redux/ducks/modal/slice'
import { useDispatch, useSelector } from 'react-redux'
import * as selectors from './redux/rootSelectors'

function App(){ 
    const dispatch = useDispatch()
    const currentConf = useSelector(selectors.confSelectors.selectConf)

    const handleChange_width = (event, newValue) => {
        dispatch(changeWidth({value: newValue}))
    }

    const handleChange_height = (event, newValue) => {
        dispatch(changeHeight({value: newValue}))
    }

    const handleChange_borderRadius = (event, newValue) => {
        dispatch(changeBorderRadius({value: newValue}))
    }

    const handleChange_opacity = (event, newValue) => {
        dispatch(changeOpacity({value: newValue}))
    }

    const handleChange_backgroundColor = (event, newValue) => {
        dispatch(changeBackgroundColor({value: newValue}))
    }

    const handleClick_canvas = (event) => {
        dispatch(add({x: event.pageX, y: event.pageY, currentConf: currentConf}))
    }

    const handleClick_button = (event, id) => {
        switch(id){
            case "RESET":
            dispatch(reset())
        }
    }

    const handleClick_modal = () => {
        dispatch(modal())
    };

    return(
        <div>
            <Header onClick={handleClick_modal}/>
            <Grid container spacing={6}>
                <Grid item md={7} sm={12} xs={12}>
                    <Canvas onClick={handleClick_canvas} />
                </Grid>
                <Grid item md={5} sm={12} xs={12}>
                    <Palette
                        onChange_width={(event, newValue) => handleChange_width(event,newValue)}
                        onChange_height={(event, newValue) => handleChange_height(event,newValue)}
                        onChange_borderRadius={(event, newValue) => handleChange_borderRadius(event,newValue)}
                        onChange_opacity={(event, newValue) => handleChange_opacity(event,newValue)}
                        onChange_backgroundColor={(event, newValue) => handleChange_backgroundColor(event,newValue)}
                        onClick={handleClick_button}
                        />
                </Grid>
            </Grid>
        </div>
    )
}

export default App