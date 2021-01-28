import React from 'react'
import { Box, Button } from '@material-ui/core'

function CustomButton(props){
    return(
        <Box p={1}>
            <Button size="small" variant="outlined" /* color="primary" */ onClick={(event) => props.onClick(event, props.id)}>
                {props.id}
            </Button>
        </Box>
    )
}

export default CustomButton