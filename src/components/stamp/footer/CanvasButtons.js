import React from 'react'
import { withRouter } from 'react-router-dom'
import { Box } from '@material-ui/core'
import ControlButton from '../palette/parts/ControlButton'
import { useDispatch } from 'react-redux'
import { resetList } from '../../../redux/ducks/stamp/stampSlice'
import { back, next } from '../../../redux/ducks/stamp/step/actions'
import * as urls from '../../../static/constants/url'

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

    const handleClickShare = () => {
        // Redirect to reload the screen.
        window.location.href = urls.ROOT_URL + urls.SHARE
    }

    return (
        <Box display="flex" flexWrap="nowrap">
            <ControlButton onClick={handleClickResetStamp}>RESET STAMP</ControlButton>
            <ControlButton onClick={handleClickBack}>BACK</ControlButton>
            <ControlButton onClick={handleClickNext}>NEXT</ControlButton>
            <ControlButton onClick={handleClickShare}>SHARE</ControlButton>
        </Box>
    )
}

export default withRouter(CanvasButtons)