import React from 'react'
import { Grid } from '@material-ui/core'
import { HuePicker } from 'react-color'
import CustomSlider from './slider/CustomSlider'
import Preview from './preview/Preview'
import { connect } from 'react-redux'
import CustomButton from './button/CustomButton'

class Palette extends React.Component {

    handleChangeBackgroundColor = (color) => {
        let event = {
            target: {
                id: this.props.conf.backgroundColor.id,
            }
        }
        this.props.onChange_backgroundColor(event, color.hex)
    }

    render(){
        return (
            <div className="palette_style">
                <Grid container spacing={5} alignItems="center" justify="center">
                    <Grid item md={4} sm={6} xs={10}>
                        <Grid item xs={12}>
                            <CustomSlider
                                id={this.props.conf.width.id}
                                step={this.props.conf.width.step}
                                max={this.props.conf.width.max}
                                value={this.props.conf.width.value}
                                onChange={this.props.onChange_width}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomSlider
                                id={this.props.conf.height.id}
                                step={this.props.conf.height.step}
                                max={this.props.conf.height.max}
                                value={this.props.conf.height.value}
                                onChange={this.props.onChange_height}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomSlider
                                id={this.props.conf.borderRadius.id}
                                step={this.props.conf.borderRadius.step}
                                max={this.props.conf.borderRadius.max}
                                value={this.props.conf.borderRadius.value}
                                onChange={this.props.onChange_borderRadius}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomSlider
                                id={this.props.conf.opacity.id}
                                step={this.props.conf.opacity.step}
                                max={this.props.conf.opacity.max}
                                value={this.props.conf.opacity.value}
                                onChange={this.props.onChange_opacity}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <h3>{this.props.conf.backgroundColor.id}: {this.props.conf.backgroundColor.value}</h3>
                            <HuePicker
                                color={this.props.conf.backgroundColor.value}
                                onChange={this.handleChangeBackgroundColor}
                                width={this.props.conf.backgroundColor.width}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomButton id="RESET" onClick={this.props.onClick}/>
                        </Grid>
                    </Grid>
                    <Grid item md={8} sm={6} xs={12}>
                        <Grid container spacing={6} alignItems="center" justify="center">
                            <Preview preview={this.props.preview}/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Palette = connect((state) => state)(Palette)
export default Palette