import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import NavigationButton from '../palette/parts/NavigationButton'
import { Box } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { initHeader } from '../../redux/ducks/client-rect/slice'
import { useStampStyles } from '../../styles/useStampStyles'
import { useClientRect } from '../../hooks/useClientRect'

function Header(){
    const dispatch = useDispatch()
    const classes = useStampStyles()

    const [rect, ref] = useClientRect()
    useEffect(() => {
        if(rect !== null){
            dispatch(initHeader({width: rect.width, height: rect.height}))
        }
    },[rect])

    return (
        <Box display="flex" flexDirection="row">
            <Box ref={ref} className={classes.header} flexGrow={1}>
                <Link to="/">
                    <Logo />
                </Link>
            </Box>
            <Link to="/" style={{textDecoration: "none"}}>
                <NavigationButton>Stamp</NavigationButton>
            </Link>
            <Link to="/gallery" style={{textDecoration: "none", pointerEvents: "none"}}>
                <NavigationButton disabled>Gallery</NavigationButton>
            </Link>
            <Link to="/about" style={{textDecoration: "none"}}>
                <NavigationButton>About</NavigationButton>
            </Link>
        </Box>
    )
}

export default Header