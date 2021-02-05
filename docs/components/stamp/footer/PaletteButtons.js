import React from 'react'
import { Box } from '@material-ui/core'
import ControlButton from '../palette/parts/ControlButton'
import { useDispatch } from 'react-redux'
import { resetConf } from '../../../redux/ducks/stamp/stampSlice'

const PaletteButtons = () => {
    const dispatch = useDispatch()
    
    const handleClickResetConf = () => {
        dispatch(resetConf())
    }

    return (
        <Box display="flex" flexWrap="nowrap">
            <ControlButton onClick={handleClickResetConf}>RESET CONF</ControlButton>
        </Box>
    )
}

export default PaletteButtons