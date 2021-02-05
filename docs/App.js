import React, { Fragment, useState, useEffect } from 'react'
import './static/css/App.css'
import {
    Route,
    Link,
    Switch,
    useLocation,
} from 'react-router-dom'
import * as urls from './static/constants/url'
import { useClientRect } from './hooks/useClientRect'
import { useStampStyles } from './styles/useStampStyles'
import { initHeader } from './redux/ducks/client-rect/slice'

import Logo from './components/header/Logo'
import Footer from './components/footer/Footer'
import { Box, Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Palette from './components/palette/Palette'
import PaletteButtons from './components/footer/PaletteButtons'
import Canvas from './components/canvas/Canvas'
import CanvasButtons from './components//footer/CanvasButtons'
import { useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ReactSwipe from 'react-swipe'
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