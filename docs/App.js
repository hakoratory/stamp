import React, { Fragment, useState, useEffect } from 'react'
import './static/css/App.css'
import {
    Route,
    useLocation,
} from 'react-router-dom'
import * as urls from './static/constants/url'
import Footer from './components/footer/Footer'
import { Box } from '@material-ui/core'
import Palette from './components/palette/Palette'
import PaletteButtons from './components/footer/PaletteButtons'
import Canvas from './components/canvas/Canvas'
import CanvasButtons from './components//footer/CanvasButtons'
import SwipeableViews from 'react-swipeable-views'
import Header from './components/header/Header'
import About from './components/header/About'
import SwipeableSwitch from './components/stamp/SwipeableSwitch'

function App(){

    useEffect(() => {
        function noScroll(event){
            event.preventDefault();
        }

        document.addEventListener('touchmove', noScroll, { passive: false });
    },[])

    const [index, setIndex] = useState(1)

    const location = useLocation()
    useEffect(() => {
        setIndex(0)

        return () => {
            setIndex(1)
        }
    },[location])

    const handleChangeIndex = (index) => {
        setIndex(index)
    }

    return(
        <Fragment>
            <Box mb={0.5}>
                <Header />
            </Box>
            <Route exact path={urls.STAMP}>
                <Box>
                    <SwipeableSwitch onChangeIndex={handleChangeIndex} />
                </Box>
                <SwipeableViews index={index} disabled>
                    <Box width="95%" m="auto">
                        <Box p={1}>
                            <Canvas />
                            <Footer><CanvasButtons /></Footer>
                        </Box>
                    </Box>
                    <Box width="95%" m="auto">
                        <Box p={1}>
                            <Palette />
                            <Footer><PaletteButtons /></Footer>
                        </Box>
                    </Box>
                </SwipeableViews>
            </Route>
            <Route path={urls.ABOUT}>
                <About />
            </Route>
        </Fragment>
    )
}

export default App