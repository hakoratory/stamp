import React, { Fragment, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Box } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import SwipeableSwitch from './SwipeableSwitch'
import Canvas from './canvas/Canvas'
import Footer from './footer/Footer'
import Palette from './palette/Palette'
import CanvasButtons from './footer/CanvasButtons'
import PaletteButtons from './footer/PaletteButtons'

function Stamp(){
    const location = useLocation()

    const [index, setIndex] = useState(1)

    useEffect(() => {
        setIndex(0)

        return () => {
            setIndex(1)
        }
    },[location])

    const handleChangeIndex = (index) => {
        setIndex(index)
    }

    return (
        <Fragment>
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
        </Fragment>
    )
}

export default Stamp