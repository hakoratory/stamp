import React, { Fragment, useState, useCallback, useEffect } from 'react'
import './static/css/App.css'
import Header from './header/Header'
import { makeStyles, Box, BottomNavigation, BottomNavigationAction, Divider } from '@material-ui/core'
import Palette from './palette/Palette'
import Canvas from './canvas/Canvas'
import CustomButton from './palette/button/CustomButton'
import { modal } from './redux/ducks/modal/slice'
import { useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { reset } from './redux/ducks/stamp/stampSlice'
import { back, next } from './redux/ducks/stamp/step/actions'
import ReactSwipe from 'react-swipe'

export const useStyles = makeStyles((theme) => ({
    preview: {
        [theme.breakpoints.up('md')]: {
            width: "320px",
            height: "320px",
        },
        [theme.breakpoints.down('sm')]: {
            width: "170px",
            height: "170px",
        },
    },
}))


function App(){
    const classes = useStyles()
    const dispatch = useDispatch()

    // move to Header component
    const handleClick_modal = () => {
        dispatch(modal())
    }

    // create new component
    const handleClickResetStamp = () => {
        dispatch(reset())
    }

    const handleClickResetConf = () => {
        dispatch(reset())
    }

    const handleClickBack = () => {
        dispatch(back())
    }

    const handleClickNext = () => {
        dispatch(next())
    }

    /* const [swipeRef, setSwipeRef] = useState(null)
    useEffect(() => {
        console.log('test')
        if(swipeRef !== null){
            swipeRef.next()
        }
    }) */
    let swipeRef

    const handleTouch = () => {
        console.log('onTouchApp')
        alert('ontouch app')
        //swipeRef.disableScrolling(false)
    }

    return(
        <Fragment>
            <Header onClick={handleClick_modal}/>
            <ReactSwipe
                className="carousel"
                swipeOptions={{continuous: false}}
                ref={el => swipeRef = el}>
                <Box width="95%">
                    <Canvas swipeRef={swipeRef} onTouch={() => handleTouch()}/>
                </Box>
                <Box width="95%">
                    <Palette />
                </Box>
            </ReactSwipe>
            <Box>
                <Box display="flex"flexDirection="row" alignItems="flex-start">
                    <Box display="flex" flexWrap="wrap" flexGrow={1}>
                        <CustomButton id="RESET STAMP" onClick={handleClickResetStamp}/>
                        <CustomButton id="RESET CONF" onClick={handleClickResetConf}/>
                        <CustomButton id="BACK" onClick={handleClickBack}/>
                        <CustomButton id="NEXT" onClick={handleClickNext}/>
                    </Box>
                    <Box>
                        <IconButton onClick={() => swipeRef.prev()}>
                            <ArrowBackIosIcon />      
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton onClick={() => swipeRef.next()}>
                            <ArrowForwardIosIcon />      
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Fragment>
    )
}

export default App