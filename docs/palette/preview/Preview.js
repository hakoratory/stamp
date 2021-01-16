import React from 'react'
import { Grid } from '@material-ui/core'
import '../../static/css/Preview.css'
import { useSelector } from 'react-redux'
import * as selectors from '../../redux/rootSelectors'

function Preview(props){

    const preview = useSelector(selectors.confSelectors.selectConfAsPreview)
    return (
        <Grid container spacing={6} alignItems="center" justify="center" className="preview_container">
            <div className="preview_body" style={preview}></div>
        </Grid>
    )
}

export default Preview