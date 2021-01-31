import React, { useState, Fragment } from 'react'
import PersistentDrawerBottom from '../drawer/PersistentDrawerBottom'
import Palette from '../palette/Palette'
import { Box } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

export const useDrawerOpen = () => {
    const [isOpen, setOpen] = useState(false);
    const open = () => {
        setOpen(true);
    };
    const close = () => {
        setOpen(false);
    };
    return [isOpen, open, close]
}

export default function DrawerPalette(){
    const [isOpen, open, close] = useDrawerOpen()

    const handleDrawerOpen = () => {
        open()
    }

    const handleDrawerClose = () => {
        close()
    }

    return (
        /* ドロワーに、ブレークポイントごとの高さを渡す md sm xs */
        <Fragment>
            <Box display="flex" alignItems="center" justifyContent="center">
                <IconButton  onClick={handleDrawerOpen}>
                    <ExpandLessIcon fontSize="large"/>
                </IconButton>
            </Box>
            <PersistentDrawerBottom
                mdHeight={65 + 350}
                smHeight={65 + 175}
                xsHeight={65 + 175 + 185}
                open={isOpen}
                onOpen={handleDrawerOpen}
                onClose={handleDrawerClose}>
                <Palette className="margin-top-important"/>
            </PersistentDrawerBottom>
        </Fragment>
    )
}