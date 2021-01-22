import React, { useEffect } from 'react'
import { Grid, Typography, useTheme, useMediaQuery } from '@material-ui/core'
import { HuePicker } from 'react-color'
import CustomSlider from './slider/CustomSlider'
import Preview from './preview/Preview'
import { useSelector } from 'react-redux'
import * as selectors from '../redux/rootSelectors'

export default function Palette(props){

    const conf = useSelector(selectors.confSelectors.selectConf)

    const handleChangeBackgroundColor = (color) => {
        let event = {
            target: {
                id: conf.backgroundColor.id,
            }
        }
        props.onChange_backgroundColor(event, color.hex)
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
    
    return (
        <Grid container spacing={3} alignItems="flex-start" justify="center">
            <Grid item md={5} sm={5} xs={12}>
                <Preview />
            </Grid>
            <Grid item md={5} sm={5} xs={10}>
                <Grid container>
                    <Grid item xs={12} className="padding">
                        <CustomSlider
                            id={conf.width.id}
                            displayName={conf.width.displayName}
                            step={1}
                            max={matches ? 150 : 300} 
                            value={conf.width.value}
                            onChange={props.onChange_width}
                            />
                    </Grid>
                    <Grid item xs={12} className="padding">
                        <CustomSlider
                            id={conf.height.id}
                            displayName={conf.height.displayName}
                            step={1}
                            max={matches ? 150 : 300}
                            value={conf.height.value}
                            onChange={props.onChange_height}
                            />
                    </Grid>
                    <Grid item xs={12} className="padding">
                        <CustomSlider
                            id={conf.borderRadius.id}
                            displayName={conf.borderRadius.displayName}
                            step={1}
                            max={matches ? 75 : 150}
                            value={conf.borderRadius.value}
                            onChange={props.onChange_borderRadius}
                            />
                    </Grid>
                    <Grid item xs={12} className="padding">
                        <CustomSlider
                            id={conf.opacity.id}
                            displayName={conf.opacity.displayName}
                            step={0.1}
                            max={1}
                            value={conf.opacity.value}
                            onChange={props.onChange_opacity}
                            />
                    </Grid>
                    <Grid item xs={12} className="padding">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Typography variant="subtitle2">
                                    {conf.backgroundColor.displayName}
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