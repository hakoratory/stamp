import React from 'react'
import { Button } from '@material-ui/core'
import '../../Button.css'

function CustomButton(props){
    return(
        <div className="button_group">
            <Button variant="contained" color="primary" onClick={(event) => props.onClick(event, props.id)}>
                {props.id}
            </Button>
        </div>
    )
}

export default CustomButton