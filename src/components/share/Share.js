import React from 'react'
import { Box } from '@material-ui/core'
import PleaseShare from './PleaseShare'
import { useFrameStyles } from '../../hooks/useFrameStyles'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import * as selectors from '../../redux/rootSelectors'

import ShareButtons from './ShareButtons'

export default function Share(){
    const classes = useFrameStyles()
    const canvasFrame = classNames(classes.common, classes.shape)

    const stepNumber = useSelector(selectors.stepSelectors.selectStepNumber)
    const list = useSelector(selectors.listSelectors.selectList)
    const currentList = list.slice(0, stepNumber + 1)

    function stamp(stamp_data){
        let style = {
            position: "absolute",
            left: (stamp_data.x - stamp_data.width/2) + "px",
            top: (stamp_data.y - stamp_data.height/2) + "px",
            width: stamp_data.width + "px",
            height: stamp_data.height + "px",
            borderRadius: stamp_data.borderRadius + "px",
            backgroundColor: stamp_data.backgroundColor,
            opacity: stamp_data.opacity,
            transform: "rotate(" + stamp_data.rotate + "deg)",
        }
        return <Box style={style} key={stamp_data.number}></Box>
    }

    return (
        <Box width="95%" m="auto">
            <Box p={1}>
                <Box id="share" className={canvasFrame} >
                    {currentList.map((value) => stamp(value))}               
                </Box>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="center">
                <ShareButtons />
            </Box>
            <PleaseShare />
        </Box>
    )
}