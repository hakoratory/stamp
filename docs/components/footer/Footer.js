import React, { useEffect } from 'react'
import { Box } from '@material-ui/core'
import CustomCssButton from '../palette/parts/CustomCssButton'
import { useClientRect } from '../../hooks/useClientRect'
import { initFooter } from '../../redux/ducks/client-rect/slice'
import { useDispatch } from 'react-redux'
import { resetList, resetConf } from '../../redux/ducks/stamp/stampSlice'
import { back, next } from '../../redux/ducks/stamp/step/actions'

export default function Footer(){
    const dispatch = useDispatch()

    const [rect, ref] = useClientRect()
    useEffect(() => {
        if(rect !== null){
            dispatch(initFooter({width: rect.width, height: rect.height}))
        }
    },[rect])

    const handleClickResetStamp = () => {
        dispatch(resetList())
    }

    const handleClickResetConf = () => {
        dispatch(resetConf())
    }

    const handleClickBack = () => {
        dispatch(back())
    }

    const handleClickNext = () => {
        dispatch(next())
    }

    return (
        <Box ref={ref}>
            <Box display="flex" flexDirection="row" alignItems="flex-start">
                <Box display="flex" flexWrap="wrap" flexGrow={1} m={1} justifyContent="center">
                    <Box display="flex" flexWrap="nowrap">
                        <CustomCssButton onClick={handleClickResetStamp}>RESET STAMP</CustomCssButton>
                        <CustomCssButton onClick={handleClickResetConf}>RESET CONF</CustomCssButton>
                    </Box>
                    <Box display="flex" flexWrap="nowrap">
                        <CustomCssButton onClick={handleClickBack}>BACK</CustomCssButton>
                        <CustomCssButton onClick={handleClickNext}>next</CustomCssButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}