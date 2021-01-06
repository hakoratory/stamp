import React from 'react'
import { Slider } from '@material-ui/core'

function CustomSlider(props){
    return(
        <div>
            <h3>{props.id}: {props.value}</h3>
            <Slider
                id={props.id}
                step={props.step}
                max={props.max}
                onChange={props.onChange}
                value={props.value}
                />
        </div>
    )
}

export default CustomSlider