import React, {Fragment, useEffect, useState } from 'react'
import { useInnerHeight } from '../../hooks/useInnerHeight'
import { useDispatch, useSelector } from 'react-redux'
import * as selectors from '../../redux/rootSelectors'
import { Box } from '@material-ui/core'
import {
    add,
} from '../../redux/ducks/stamp/list/actions'
import {
    set,
} from '../../redux/ducks/stamp/step/actions'
import { useStampStyles } from '../../styles/useStampStyles'
import classNames from 'classnames'
import { useClientRect } from '../../hooks/useClientRect'
import DummyStamp from './DummyStamp'

export default function Canvas(props){
    const dispatch = useDispatch()
    
    const stepNumber = useSelector(selectors.stepSelectors.selectStepNumber)
    const list = useSelector(selectors.listSelectors.selectList)
    const currentList = list.slice(0, stepNumber + 1)

    const innerHeight = useInnerHeight()
    const headerRect = useSelector(selectors.clientRectSelectors.selectHeaderRect)
    const footerRect = useSelector(selectors.clientRectSelectors.selectFooterRect)

    const classes = useStampStyles({
        innerHeight: innerHeight,
        headerHeight: headerRect.height,
        footerHeight: footerRect.height,
    })

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

    const [canvasRect, canvasRef] = useClientRect()
    const handleClickCanvas = (event) => {
        dispatch(add({
            x: event.pageX - canvasRect.left,
            y: event.pageY - canvasRect.top,
        }))   
        dispatch(set(currentList.length))
    }

    const canvasFrame = classNames(classes.frame_common, classes.frame_shape)
    const dummyCanvasFrame = classNames(classes.frame_common, classes.frame_shape_dummy)

    

    return(
        <Fragment>
            <Box
                ref={canvasRef}
                id="canvas"
                className={canvasFrame}
                onTouchStart={props.onTouchStart}
                onTouchEnd={props.onTouchEnd}
                >
                {currentList.map((value) => stamp(value))}
                <DummyStamp
                    className={dummyCanvasFrame}
                    canvasRect={canvasRect}
                    onClick={handleClickCanvas}
                    />
            </Box>
        </Fragment>
    )
}