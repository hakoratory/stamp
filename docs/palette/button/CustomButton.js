import React from 'react'
import { Box, Button } from '@material-ui/core'

function CustomButton(props){
    return(
        <Box p={1}>
            <Button variant="contained" color="primary" onClick={(event) => props.onClick(event, props.id)}>
                {props.id}
            </Button>
        </Box>
    )
}

export default CustomButton