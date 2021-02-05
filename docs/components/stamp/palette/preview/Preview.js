import React from 'react'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'
import * as selectors from '../../../../redux/rootSelectors'
import { useStampStyles } from '../../../../styles/useStampStyles'
import { getPreview } from '../../../../redux/utils'

function Preview(){
    const classes = useStampStyles()
    const currentConf = useSelector(selectors.confSelectors.selectConf)
    
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Box display="flex" bgcolor="white" className={classes.preview} alignItems="center" justifyContent="center">
                <Box className="preview_body" style={getPreview(currentConf)}></Box>
            </Box>
        </Box>
    )
}

export default Preview