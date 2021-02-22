import React from 'react'
import { Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        color: "#4D4D4D",
        fontWeight: "bold",
        border: "2px solid #DDDDDD",
        borderRadius: "5px",
        minWidth: "40px",
        [theme.breakpoints.up('sm')]: {
            padding: "4px",
            fontSize: "0.9em"
        },
        [theme.breakpoints.down('xs')]: {
            padding: "1px 5px",
            fontSize: "0.5em"
        },
    }
}))

const ControlButton = (props) => {
    const classes = useStyles()
    return (
        <Box mx={0.5}>
            <Button className={classes.root} onClick={props.onClick}>{props.children}</Button>
        </Box>
    )
}

export default ControlButton