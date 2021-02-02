import React, { Fragment, useEffect } from 'react'
import './static/css/App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Box } from '@material-ui/core'
import Palette from './components/palette/Palette'
import Canvas from './components/canvas/Canvas'
import { useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ReactSwipe from 'react-swipe'

function App(){
    const dispatch = useDispatch()

    useEffect(() => {
        function noScroll(event){
            event.preventDefault();
        }

        document.addEventListener('touchmove', noScroll, { passive: false });
    },[])

    let swipeRef

    const handleTouchStart = () => {
        swipeRef.props.swipeOptions.disableScroll = true
    }

    const handleTouchEnd = () => {
        swipeRef.props.swipeOptions.disableScroll = false
    }

    return(
        <Fragment>
            <Header/>
            <ReactSwipe
                className="carousel"
                swipeOptions={{continuous: false,disableScroll: false}}
                ref={el => swipeRef = el}
                >
                <Box width="85%">
                    <Box display="flex" flexDirection="row" alignItems="center" p={1}>
                        <Canvas
                            swipeRef={swipeRef}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                            onClick={(event) => handleClickCanvas(event)}
                            />
                        <Box>
                            <IconButton onClick={() => swipeRef.next()} style={{padding: 1}}>
                                <ArrowForwardIosIcon/>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
                <Box width="85%">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <Box>
                        <IconButton onClick={() => swipeRef.prev()} style={{padding: 1}}>
                            <ArrowBackIosIcon />      
                        </IconButton>
                    </Box>
                    <Palette  onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}/>
                    </Box>
                </Box>
            </ReactSwipe>
            <Footer />
        </Fragment>
    )
}

export default App