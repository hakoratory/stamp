import React, { Fragment } from 'react'
import { Grid, Typography, Slider, Box } from '@material-ui/core'

function CustomSlider(props){
    return(
        <Fragment>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography variant="subtitle1">
                        {props.displayName}
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
                <Grid item xs={2}>
                    <Typography variant="subtitle1">
                        <Box textAlign="right">
                            {props.value}/{props.max}
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default CustomSlider