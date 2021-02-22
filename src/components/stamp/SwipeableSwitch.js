import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

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
        color: "#4D4D4D",
        //borderBottom: "30px solid #FFFFFF",
        //borderRight: "15px solid transparent",
        height: "0",
        width: "80%",
    },
    canvas_right: {
        color: "#DDDDDD",
        borderBottom: "30px solid #C0C0C0",
        borderLeft: "15px solid transparent",
        height: "0",
        width: "20%",
        fontSize: "0.8em",
        
    },
    palette_left: {
        color: "#DDDDDD",
        borderBottom: "30px solid #C0C0C0",
        borderRight: "15px solid transparent",
        height: "0",
        width: "20%",
        fontSize: "0.8em",
    },
    palette_right: {
        color: "#4D4D4D",
        //borderBottom: "30px solid #FFFFFF",
        //borderLeft: "15px solid transparent",
        height: "0",
        width: "80%",
    }
})

const StyledBox = (props) => {
    return <Box className={props.className} lineHeight="30px" fontWeight="fontWeightBold" textAlign="center">{props.children}</Box>
}

export default function SwipeableSwitch(props){
    const classes = useStyles()
    return (
        <SwipeableViews onChangeIndex={props.onChangeIndex} enableMouseEvents>
            <Box className={classes.root}>
                <Box display="flex" flexDirection="row" height="30px">
                    <Typography component="div" className={classes.canvas_left} gutterBottom>
                        <StyledBox>
                            Canvas
                        </StyledBox>
                    </Typography>
                    <Typography component="div" className={classes.canvas_right} gutterBottom>
                        <StyledBox>
                            Palette
                        </StyledBox>
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.root}>
                <Box display="flex" flexDirection="row" height="30px">
                    <Typography component="div" className={classes.palette_left} gutterBottom>
                        <StyledBox>
                            Canvas
                        </StyledBox>
                    </Typography>
                    <Typography component="div" className={classes.palette_right} gutterBottom>
                        <StyledBox>
                            Palette
                        </StyledBox>
                    </Typography>
                </Box>
            </Box>
        </SwipeableViews>
    )
}