import React from 'react'
import { Grid, Box } from '@material-ui/core'
import { useSelector } from 'react-redux'
import * as selectors from '../../redux/rootSelectors'
import { useStyles } from '../../App'

function Preview(props){
    const classes = useStyles()
    const preview = useSelector(selectors.confSelectors.selectConfAsPreview)
    
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Box display="flex" bgcolor="white" className={classes.preview} alignItems="center" justifyContent="center" border={1}>
                <Box className="preview_body" style={preview}></Box>
            </Box>
        </Box>
    )
}

export default Preview