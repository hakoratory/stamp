import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { HuePicker } from 'react-color'
import CustomSlider from './slider/CustomSlider'
import Preview from './preview/Preview'
import CustomButton from './button/CustomButton'
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

    return (
        <div className="palette_style">
            <Grid container spacing={4} alignItems="center" justify="center">
                <Grid item md={12} sm={12} xs={12}>
                    <Preview />
                </Grid>
                <Grid item md={8} sm={12} xs={12}>
                    <Grid container>
                        <Grid item md={12} sm={6} xs={6} className="padding">
                            <CustomSlider
                                id={conf.width.id}
                                step={conf.width.step}
                                max={conf.width.max}
                                value={conf.width.value}
                                onChange={props.onChange_width}
                                />
                        </Grid>
                        <Grid item md={12} sm={6} xs={6} className="padding">
                            <CustomSlider
                                id={conf.height.id}
                                step={conf.height.step}
                                max={conf.height.max}
                                value={conf.height.value}
                                onChange={props.onChange_height}
                                />
                        </Grid>
                        <Grid item md={12} sm={6} xs={6} className="padding">
                            <CustomSlider
                                id={conf.borderRadius.id}
                                step={conf.borderRadius.step}
                                max={conf.borderRadius.max}
                                value={conf.borderRadius.value}
                                onChange={props.onChange_borderRadius}
                                />
                        </Grid>
                        <Grid item md={12} sm={6} xs={6} className="padding">
                            <CustomSlider
                                id={conf.opacity.id}
                                step={conf.opacity.step}
                                max={conf.opacity.max}
                                value={conf.opacity.value}
                                onChange={props.onChange_opacity}
                                />
                        </Grid>
                        <Grid item md={12} sm={6} xs={6} className="padding">
                            <Typography variant="subtitle1">
                                {conf.backgroundColor.id}: {conf.backgroundColor.value}
                            </Typography>
                            <HuePicker
                                color={conf.backgroundColor.value}
                                onChange={handleChangeBackgroundColor}
                                width={conf.backgroundColor.width}
                                />
                        </Grid>
                        <Grid item md={12} sm={6} xs={6} className="padding">
                            <CustomButton id="RESET" onClick={props.onClick}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}