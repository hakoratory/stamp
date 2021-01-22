import React, {Fragment} from 'react'
import { useSelector } from 'react-redux'
import * as selectors from '../redux/rootSelectors'
import { Box, makeStyles } from '@material-ui/core'

export const useStylesCanvas = makeStyles((theme) => ({
    canvas: {
        border: "2px solid #808080",
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: props => props.height - 67 - 115
    },
}))

export default function Canvas(props){
    const classes = useStylesCanvas(props)
    const stampList = useSelector(selectors.listSelectors.selectList)

    function stamp(stamp_data){
        let style = {
            position: "absolute",
            left: (stamp_data.x - stamp_data.width/2) + "px",
            top: (stamp_data.y - stamp_data.height/2) + "px",
            width: stamp_data.width + "px",
            height: stamp_data.height + "px",
            borderRadius: stamp_data.borderRadius + "px",
            backgroundColor: stamp_data.backgroundColor,
            opacity: stamp_data.opacity,
        }
        return <Box style={style} key={stamp_data.number}></Box>
    }

    return(
        <Fragment>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Box id="canvas" className={classes.canvas} onClick={props.onClick}>
                    {stampList.map((value) => stamp(value))}
                </Box>
            </Box>
        </Fragment>
    )
}