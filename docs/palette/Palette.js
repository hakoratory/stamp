import React, { useEffect } from 'react'
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

export default function Palette(props){
    const dispatch = useDispatch()
    const conf = useSelector(selectors.confSelectors.selectConf)

    const handleChangeBackgroundColor = (color) => {
        let event = {
            target: {
                id: conf.backgroundColor.id,
            }
        }
        handleChange_backgroundColor(event, color.hex)
    }

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        if(matches && conf.width.value > 150){
            props.onChange_width({},150)
        }
        if(matches && conf.height.value > 150){
            props.onChange_height({},150)
        }
        if(matches && conf.borderRadius.value > 75){
            props.onChange_borderRadius({},75)
        }
    },[matches])

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
    
    return (
        <Grid container spacing={3} alignItems="flex-start" justify="center">
            <Grid item md={5} sm={5} xs={12}>
                <Preview />
            </Grid>
            <Grid item md={5} sm={5} xs={12}>
                <Grid container>
                    <Grid item xs={12} className="padding">
                        <CustomSlider
                            id={conf.width.id}
                            displayName={conf.width.displayName}
                            step={1}
                            max={matches ? 150 : 300} 
                            value={conf.width.value}
                            onChange={(event, newValue) => handleChange_width(event, newValue)}
                            />
                    </Grid>
                    <Grid item xs={12} className="padding">
                        <CustomSlider
                            id={conf.height.id}
                            displayName={conf.height.displayName}
                            step={1}
                            max={matches ? 150 : 300}
                            value={conf.height.value}
                            onChange={(event, newValue) => handleChange_height(event, newValue)}
                            />
                    </Grid>
                    <Grid item xs={12} className="padding">
                        <CustomSlider
                            id={conf.borderRadius.id}
                            displayName={conf.borderRadius.displayName}
                            step={1}
                            max={matches ? 75 : 150}
                            value={conf.borderRadius.value}
                            onChange={(event, newValue) => handleChange_borderRadius(event, newValue)}
                            />
                    </Grid>
                    <Grid item xs={12} className="padding">
                        <CustomSlider
                            id={conf.opacity.id}
                            displayName={conf.opacity.displayName}
                            step={0.1}
                            max={1}
                            value={conf.opacity.value}
                            onChange={(event, newValue) => handleChange_opacity(event, newValue)}
                            />
                    </Grid>
                    <Grid item xs={12} className="padding">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Typography variant="subtitle2">
                                    <Box lineHeight={2}>
                                        {conf.backgroundColor.displayName}
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <HuePicker
                                    color={conf.backgroundColor.value}
                                    onChange={handleChangeBackgroundColor}
                                    width={conf.backgroundColor.width}
                                    />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}