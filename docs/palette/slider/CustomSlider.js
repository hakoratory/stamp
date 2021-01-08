import React from 'react'
import { Grid, Typography, Slider } from '@material-ui/core'

function CustomSlider(props){
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography variant="subtitle1">
                        {props.id}: {props.value}
                    </Typography>
                </Grid>
                <Grid item xs>
                <Slider
                    id={props.id}
                    step={props.step}
                    max={props.max}
                    onChange={props.onChange}
                    value={props.value}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default CustomSlider