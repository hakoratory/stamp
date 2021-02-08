import React, { useState, useEffect, useRef } from 'react'
import { useInnerHeight } from '../../../hooks/useInnerHeight'
import { useMediaQueryUp, useMediaQueryDown } from '../../../hooks/useMediaQuery'
import { Box } from '@material-ui/core'
import CustomSlider from './parts/CustomSlider'
import Preview from './preview/Preview'
import { useDispatch, useSelector } from 'react-redux'
import * as selectors from '../../../redux/rootSelectors'
import {
    changeWidth,
    changeHeight,
    changeBorderRadius,
    changeOpacity,
    changeRotate,
    changeBackgroundColor,
} from '../../../redux/ducks/stamp/conf/actions'
import { useStampStyles } from '../../../styles/useStampStyles'
import { Hue } from 'react-color-palette/lib/components/Hue'
import { Saturation } from 'react-color-palette/lib/components/Saturation'
import { useRect } from '../../../hooks/useRect'
import { useTouchToMouse } from '../../../hooks/useTouchToMouse'
import classNames from 'classnames'
import { useFrameStyles } from '../../../hooks/useFrameStyles'
/* Do not delete it as it is necessary to display the hue color.  */
import { Color } from 'react-color-palette'
/* end */

export default function Palette(props){
    const dispatch = useDispatch()
    const conf = useSelector(selectors.confSelectors.selectConf)

    const matches = useMediaQueryDown('sm')
    const [sliderGroupWidth, setSliderGroupWidth] = useState("")

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
            setSliderGroupWidth("90%")
        }
    },[matches])

    const mdUpMatches = useMediaQueryUp('md')

    useEffect(() => {
        if(mdUpMatches){
            setSliderGroupWidth("50%")
        }
    },[mdUpMatches])

    const handleChangeWidth = (event, newValue) => {
        dispatch(changeWidth({value: newValue}))
    }

    const handleChangeHeight = (event, newValue) => {
        dispatch(changeHeight({value: newValue}))
    }

    const handleChangeBorderRadius = (event, newValue) => {
        dispatch(changeBorderRadius({value: newValue}))
    }

    const handleChangeRotate = (event, newValue) => {
        dispatch(changeRotate({value: newValue}))
    }

    const handleChangeOpacity = (event, newValue) => {
        dispatch(changeOpacity({value: newValue}))
    }

    const handleChangeBackgroundColor = (color) => {
        dispatch(changeBackgroundColor(color))
    }

    const classes = useFrameStyles()
    const canvasFrame = classNames(classes.common, classes.shape)

    const [sliderRect, setSliderRect] = useRect(0,0)
    const [paletteRect, setPaletteRect] = useRect(0,0)
    const [previewRect, setPreviewRect] = useRect(0,0)

    const paletteRef = useRef(null)
    const sliderRef = useRef(null)
    const previewRef = useRef(null)

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            if(paletteRef.current){
                setPaletteRect(paletteRef.current.getBoundingClientRect().width,paletteRef.current.getBoundingClientRect().height)
            }
            if(sliderRef.current){
                setSliderRect(sliderRef.current.getBoundingClientRect().width, sliderRef.current.getBoundingClientRect().height)
            }
            if(previewRef.current){
                setPreviewRect(previewRef.current.getBoundingClientRect().width,previewRef.current.getBoundingClientRect().height)
            }

            /* let saturationHeight = paletteRect.height - previewRect.height - sliderRect.height
            
            setSaturationRect(
                sliderRef.current.getBoundingClientRect().width,
                saturationHeight > 200 ? 200 : saturationHeight * 0.85
            ) */
            
        })

        paletteRef.current && observer.observe(paletteRef.current)
        previewRef.current && observer.observe(previewRef.current)
        sliderRef.current && observer.observe(sliderRef.current)

        return () => {
            observer.disconnect();
        }
    },[])

    const touchableHueRef = useTouchToMouse(true)

    const touchableSatuRef = useTouchToMouse(true)

    return (
        <Box className={canvasFrame} ref={paletteRef}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" onTouchStart={props.onTouchStart} onTouchEnd={props.onTouchEnd}>
                <Box ref={previewRef}>
                    <Preview />
                </Box>
                <Box width={sliderGroupWidth} ref={sliderRef} pb={2}>
                    <CustomSlider
                        id={conf.width.id}
                        displayName={conf.width.displayName}
                        step={1}
                        min={0}
                        max={matches ? 150 : 300} 
                        value={conf.width.value}
                        onChange={(event, newValue) => handleChangeWidth(event, newValue)}
                        />
                    <CustomSlider
                        id={conf.height.id}
                        displayName={conf.height.displayName}
                        step={1}
                        min={0}
                        max={matches ? 150 : 300}
                        value={conf.height.value}
                        onChange={(event, newValue) => handleChangeHeight(event, newValue)}
                        />
                    <CustomSlider
                        id={conf.borderRadius.id}
                        displayName={conf.borderRadius.displayName}
                        step={1}
                        min={0}
                        max={matches ? 75 : 150}
                        value={conf.borderRadius.value}
                        onChange={(event, newValue) => handleChangeBorderRadius(event, newValue)}
                        />
                    <CustomSlider
                        id={conf.rotate.id}
                        displayName={conf.rotate.displayName}
                        step={1}
                        min={0}
                        max={180}
                        value={conf.rotate.value}
                        onChange={(event, newValue) => handleChangeRotate(event, newValue)}
                        />
                    <CustomSlider
                        id={conf.opacity.id}
                        displayName={conf.opacity.displayName}
                        step={0.1}
                        min={0}
                        max={1}
                        value={conf.opacity.value}
                        onChange={(event, newValue) => handleChangeOpacity(event, newValue)}
                        />
                    <Box pt={2} ref={touchableHueRef}>
                        <Hue
                            width={sliderRect.width}
                            color={conf.backgroundColor.color}
                            onChange={handleChangeBackgroundColor}
                            />
                    </Box>
                </Box>
                <Box ref={touchableSatuRef}>
                    <Saturation
                        width={sliderRect.width}
                        height={paletteRect.height - previewRect.height - sliderRect.height > 200
                                    ? 200
                                    : (paletteRect.height - previewRect.height - sliderRect.height) * 0.85}
                        color={conf.backgroundColor.color}
                        onChange={handleChangeBackgroundColor}
                        />
                </Box>
            </Box>
        </Box>
    )
}