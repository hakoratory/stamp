import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        border: "1px solid #EEEEEE",
        backgroundColor: "#EEEEEE",
        cursor: "grab",
        '&:active': {
            cursor: "grabbing",
        },
        //borderRadius: "10px"
        userSelect: "none",
    },
    canvas_left: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#4D4D4D",
        //borderBottom: "30px solid #FFFFFF",
        //borderRight: "15px solid transparent",
        height: "0",
        width: "80%",
        lineHeight: "30px",
    },
    canvas_right: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#DDDDDD",
        borderBottom: "30px solid #C0C0C0",
        borderLeft: "15px solid transparent",
        height: "0",
        width: "20%",
        lineHeight: "30px",
        fontSize: "0.8em",
        
    },
    palette_left: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#DDDDDD",
        borderBottom: "30px solid #C0C0C0",
        borderRight: "15px solid transparent",
        height: "0",
        width: "20%",
        lineHeight: "30px",
        fontSize: "0.8em",
    },
    palette_right: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#4D4D4D",
        //borderBottom: "30px solid #FFFFFF",
        //borderLeft: "15px solid transparent",
        height: "0",
        width: "80%",
        lineHeight: "30px",
    }
})

export default function SwipeableSwitch(props){
    const classes = useStyles()
    return (
        <SwipeableViews onChangeIndex={props.onChangeIndex} enableMouseEvents>
            <Box className={classes.root}>
                <Box display="flex" flexDirection="row">
                    <Box className={classes.canvas_left}>Canvas</Box><Box className={classes.canvas_right}>Palette</Box>
                </Box>
            </Box>
            <Box className={classes.root}>
                <Box display="flex" flexDirection="row">
                    <Box className={classes.palette_left}>Canvas</Box><Box className={classes.palette_right}>Palette</Box>
                </Box>
            </Box>
        </SwipeableViews>
    )
}