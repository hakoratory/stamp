import React, { Fragment, useState, useEffect } from 'react'
import { Box, Grid, Typography, useTheme, useMediaQuery } from '@material-ui/core'
import { HuePicker } from 'react-color'
import CustomSlider from './slider/CustomSlider'
import Preview from './preview/Preview'
import { useDispatch, useSelector } from 'react-redux'
import * as selectors from '../redux/rootSelectors'
import {
    changeWidth,
    changeHeight,
    changeBorderRadius,
    changeOpacity,
    changeBackgroundColor,
} from '../redux/ducks/stamp/conf/actions'
import { useStylesCanvas } from '../canvas/Canvas'

export default function Palette(props){
    const dispatch = useDispatch()
    const conf = useSelector(selectors.confSelectors.selectConf)

/*     const handleChangeBackgroundColor = (color) => {
        let event = {
            target: {
                id: conf.backgroundColor.id,
            }
        }
        handleChange_backgroundColor(event, color.hex)
    } */

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const [sliderGroupWidth, setSliderGroupWidth] = useState("70%")

    useEffect(() => {
        if(matches && conf.width.value > 150){
            handleChangeWidth({},150)
        }
        if(matches && conf.height.value > 150){
            handleChangeHeight({},150)
        }
        if(matches && conf.borderRadius.value > 75){
            handleChangeBorderRadius({},75)
        }
        if(matches){
            setSliderGroupWidth("80%")
        }else{
            setSliderGroupWidth("70%")
        }
    },[matches])

    const handleChangeWidth = (event, newValue) => {
        dispatch(changeWidth({value: newValue}))
    }

    const handleChangeHeight = (event, newValue) => {
        dispatch(changeHeight({value: newValue}))
    }

    const handleChangeBorderRadius = (event, newValue) => {
        dispatch(changeBorderRadius({value: newValue}))
    }

    const handleChangeOpacity = (event, newValue) => {
        dispatch(changeOpacity({value: newValue}))
    }

    const handleChangeBackgroundColor = (color) => {
        dispatch(changeBackgroundColor({value: color.hex}))
    }
    
    //
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const onResize = () => {
            return setHeight(window.innerHeight)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [height])

    const classes = useStylesCanvas(height)

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" className={classes.canvas}>
            <Box>
                <Preview />
            </Box>
            <Box width={sliderGroupWidth} pt={5}>
                <CustomSlider
                    id={conf.width.id}
                    displayName={conf.width.displayName}
                    step={1}
                    max={matches ? 150 : 300} 
                    value={conf.width.value}
                    onChange={(event, newValue) => handleChangeWidth(event, newValue)}
                    />
                <CustomSlider
                    id={conf.height.id}
                    displayName={conf.height.displayName}
                    step={1}
                    max={matches ? 150 : 300}
                    value={conf.height.value}
                    onChange={(event, newValue) => handleChangeHeight(event, newValue)}
                    />
                <CustomSlider
                    id={conf.borderRadius.id}
                    displayName={conf.borderRadius.displayName}
                    step={1}
                    max={matches ? 75 : 150}
                    value={conf.borderRadius.value}
                    onChange={(event, newValue) => handleChangeBorderRadius(event, newValue)}
                    />
                <CustomSlider
                    id={conf.opacity.id}
                    displayName={conf.opacity.displayName}
                    step={0.1}
                    max={1}
                    value={conf.opacity.value}
                    onChange={(event, newValue) => handleChangeOpacity(event, newValue)}
                    />
                <Box display="flex" flexDirection="row" alignItems="center">
                    <Typography variant="subtitle2">
                        <Box lineHeight={3} pr={1}>
                            {conf.backgroundColor.displayName}
                        </Box>
                    </Typography>
                    <Box flexGrow={1}>
                        <HuePicker
                            color={conf.backgroundColor.value}
                            onChange={handleChangeBackgroundColor}
                            width={conf.backgroundColor.width}
                            />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}