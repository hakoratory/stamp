import React, { Fragment, useState } from 'react'
import { Box, Container, Drawer, makeStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export const useStylesDrawer = makeStyles((theme) => ({
    drawer: {
        width: "95%",
        [theme.breakpoints.up('md')]: {
            height: props => props.mdHeight,
        },
        [theme.breakpoints.down('sm')]: {
            height: props => props.smHeight,
        },
        [theme.breakpoints.down('xs')]: {
            height: props => props.smHeight,
        },
        flexShrink: 0,
    },
    drawerPaper: {
        width: "100%",
        [theme.breakpoints.up('md')]: {
            height: props => props.mdHeight,
        },
        [theme.breakpoints.down('sm')]: {
            height: props => props.smHeight,
        },
        [theme.breakpoints.down('xs')]: {
            height: props => props.xsHeight,
        },
        backgroundColor: "#C0C0C0",
        borderTop: "1px solid #000"
    },
}))

export default function PersistentDrawerBottom(props){
    const classes = useStylesDrawer(props);

    return (
        <Fragment>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="bottom"
                open={props.open}
                classes={{
                paper: classes.drawerPaper,
                }}
                >
                <Container maxWidth="xl">
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <IconButton onClick={props.onClose}>
                            <ExpandMoreIcon  fontSize="large"/>
                        </IconButton>
                    </Box>
                    {props.children}
                </Container>
            </Drawer>
        </Fragment>
    )
}