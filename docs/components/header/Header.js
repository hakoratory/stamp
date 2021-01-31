import React, { useEffect } from 'react'
import Logo from './Logo'
import AboutDialog from './AboutDialog';
import { Box } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { initHeader } from '../../redux/ducks/client-rect/slice'
import { useStampStyles } from '../../styles/useStampStyles'
import { useClientRect } from '../../hooks/useClientRect'
import { modal } from '../../redux/ducks/modal/slice'

function Header(){
    const dispatch = useDispatch()

    const [rect, ref] = useClientRect()
    useEffect(() => {
        if(rect !== null){
            dispatch(initHeader({width: rect.width, height: rect.height}))
        }
    },[rect])

    const handleClickModal = () => {
        dispatch(modal())
    }

    const classes = useStampStyles()

    return (
        <Box ref={ref} className={classes.header}>
            <Logo onClick={handleClickModal}/>
            <AboutDialog onClick={handleClickModal}/>
        </Box>
    )
}

export default Header