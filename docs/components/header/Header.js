import React, { Fragment, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as urls from '../../static/constants/url'
import Logo from './Logo'
import NavigationButton from '../stamp/palette/parts/NavigationButton'
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

    const location = useLocation()

    return (
        <Box display="flex" flexDirection="row">
            <Box ref={ref} className={classes.header} flexGrow={1}>
                <Link to={urls.STAMP}>
                    <Logo />
                </Link>
            </Box>
            { location.pathname !== '/share/' &&
                <Fragment>
                    <Link to={urls.STAMP} style={{textDecoration: "none"}}>
                        <NavigationButton>Stamp</NavigationButton>
                    </Link>
                    <Link to={urls.GALLERY} style={{textDecoration: "none", pointerEvents: "none"}}>
                        <NavigationButton disabled>Gallery</NavigationButton>
                    </Link>
                    <Link to={urls.ABOUT} style={{textDecoration: "none"}}>
                        <NavigationButton>About</NavigationButton>
                    </Link>
                </Fragment>
            }
        </Box>
    )
}

export default Header