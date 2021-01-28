import React, { Fragment, useState, useCallback, useEffect } from 'react'
import './static/css/App.css'
import Header from './header/Header'
import { makeStyles, Box, BottomNavigation, BottomNavigationAction, Divider } from '@material-ui/core'
import Palette from './palette/Palette'
import Canvas from './canvas/Canvas'
import CustomButton from './palette/parts/CustomButton'
import { modal } from './redux/ducks/modal/slice'
import { useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { reset } from './redux/ducks/stamp/stampSlice'
import { back, next } from './redux/ducks/stamp/step/actions'
import {
    add,
} from './redux/ducks/stamp/list/actions'
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

    useEffect(() => {
        function noScroll(event){
            event.preventDefault();
        }

        document.addEventListener('touchmove', noScroll, { passive: false });
    })

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

    //const [swipeRef, setSwipeRef] = useState(null)

    let swipeRef

    //const [positionX, setPositionX] = useState(0)
    //const [positionY, setPositionY] = useState(0)
    let positionX = 0
    let positionY = 0

    useEffect(() => {
        positionX = swipeRef.containerEl.getBoundingClientRect().left
        positionY = swipeRef.containerEl.getBoundingClientRect().top
        //setPositionX(swipeRef.containerEl.getBoundingClientRect().left)
        //setPositionY(swipeRef.containerEl.getBoundingClientRect().top)
    },[])
    //const [disableScroll, setDisableScroll] = useState(false)

    /* const [rect, setRect] = useState(null)
    const swipeRef = useCallback(node => {
        if(node !== null){
            setRect(node.getBoundingClientRect())
            console.log(reect.height)
        }
    },[]) */

    const handleClickCanvas = (event) => {
        dispatch(add({
            x: event.pageX - swipeRef.containerEl.getBoundingClientRect().left,
            y: event.pageY - swipeRef.containerEl.getBoundingClientRect().top
        }))   
    }

    const handleTouchStart = () => {
        console.log('onTouchStart')
        swipeRef.props.swipeOptions.disableScroll = true
        console.log(swipeRef.props.swipeOptions)
    }

    const handleTouchEnd = () => {
        console.log('onTouchEnd')
        swipeRef.props.swipeOptions.disableScroll = false
        console.log(swipeRef.props.swipeOptions)
    }

    return(
        <Fragment>
            <Header onClick={handleClick_modal}/>
            <ReactSwipe
                className="carousel"
                swipeOptions={{continuous: false,disableScroll: false}}
                ref={el => swipeRef = el}>
                <Box width="80%">
                    <Canvas
                        swipeRef={swipeRef}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onClick={(event) => handleClickCanvas(event)}
                        //positionX={positionX}
                        //positionY={positionY}
                        />
                </Box>
                <Box width="100%">
                    <Palette  onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}/>
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