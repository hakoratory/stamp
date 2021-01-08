import React from 'react'
import { Grid } from '@material-ui/core'
import '../../static/css/Preview.css'

function Preview(props){
    return (
        <Grid container spacing={6} alignItems="center" justify="center" className="preview_container">
            <div className="preview_body" style={props.preview}></div>
        </Grid>
    )
}

export default Preview