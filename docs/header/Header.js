import React from 'react'
import Logo from './Logo'
import AboutDialog from './AboutDialog';
import { Box } from '@material-ui/core';

function Header(props){
    return (
        <Box>
            <Logo onClick={props.onClick} />
            <AboutDialog onClick={props.onClick}/>
        </Box>
    )
}

export default Header