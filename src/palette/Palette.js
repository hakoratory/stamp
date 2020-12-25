import React from 'react'
import { Grid } from '@material-ui/core'
import { HuePicker } from 'react-color'
import CustomSlider from './slider/CustomSlider'
import Preview from './preview/Preview'

class Palette extends React.Component {

    handleChangeColor = (color) => {
        let event = {
            target: {
                id: "backgroundColor"
            }
        }
        this.props.onChange(event, color.hex)
    }

    render(){
        return (
            <div>
                <Grid container spacing={6} alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Grid item xs={12}>
                            <CustomSlider id="width" step={1} max={500} value={this.props.conf.width} onChange={this.props.onChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <CustomSlider id="height" step={1} max={500} value={this.props.conf.height} onChange={this.props.onChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <CustomSlider id="borderRadius" step={1} max={250} value={this.props.conf.borderRadius} onChange={this.props.onChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <CustomSlider id="opacity" step={0.1} max={1} value={this.props.conf.opacity} onChange={this.props.onChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <h3>backgroundColor: {this.props.conf.backgroundColor}</h3>
                            <HuePicker
                                color={this.props.conf.backgroundColor}
                                onChange={this.handleChangeColor}
                                width="100%"
                                />
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={6} alignItems="center" justify="center">
                            <Preview preview={this.props.preview}/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Palette