import React, { Fragment} from 'react'
import './static/css/App.css'
import Header from './header/Header'
import { Grid, makeStyles } from '@material-ui/core'
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

export const useStyles = makeStyles((theme) => ({
    canvas: {
        border: "2px solid #808080",
        backgroundColor: "#FFFFFF",
        [theme.breakpoints.up('lg')]: {
            width: "70vw",
            height: "calc(70vw / 1.6)",
        },
        [theme.breakpoints.down('md')]: {
            width: "90%",
            height: "calc(60vw / 1.6)",
        },
        [theme.breakpoints.down('sm')]: {
            width: "90%",
            height: "55vh",
        },
        [theme.breakpoints.down('xs')]: {
            width: "90%",
            height: "40vh",
        },
    },
    preview: {
        [theme.breakpoints.up('md')]: {
            width: "320px",
            height: "320px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "170px",
            height: "170px",
        },
    }
}))

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
    }

    return(
        <Fragment>
            <Header onClick={handleClick_modal}/>
            <Grid container spacing={4}>
                <Grid item lg={8} xs={12}>
                    <Canvas onClick={handleClick_canvas} />
                </Grid>
                <Grid item lg={4} xs={12}>
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
        </Fragment>
    )
}

export default App