import React from 'react'
import { Box } from '@material-ui/core'
import ControlButton from '../palette/parts/ControlButton'
import { useDispatch } from 'react-redux'
import {
    resetList
} from '../../redux/ducks/stamp/stampSlice'
import {
    back,
    next,
} from '../../redux/ducks/stamp/step/actions'

const CanvasButtons = () => {
    const dispatch = useDispatch()

    const handleClickResetStamp = () => {
        dispatch(resetList())
    }

    const handleClickBack = () => {
        dispatch(back())
    }

    const handleClickNext = () => {
        dispatch(next())
    }

    return (
        <Box display="flex" flexWrap="nowrap">
            <ControlButton onClick={handleClickResetStamp}>RESET STAMP</ControlButton>
            <ControlButton onClick={handleClickBack}>BACK</ControlButton>
            <ControlButton onClick={handleClickNext}>next</ControlButton>
        </Box>
    )
}

export default CanvasButtons