import React, {Fragment, useEffect } from 'react'
import { useInnerHeight } from '../../hooks/useInnerHeight'
import { useDispatch, useSelector } from 'react-redux'
import * as selectors from '../../redux/rootSelectors'
import { Box } from '@material-ui/core'
import {
    set,
} from '../../redux/ducks/stamp/step/actions'
import { useStampStyles } from '../../styles/useStampStyles'

export default function Canvas(props){
    const dispatch = useDispatch()
    
    const stepNumber = useSelector(selectors.stepSelectors.selectStepNumber)
    const list = useSelector(selectors.listSelectors.selectList)
    const currentList = list.slice(0, stepNumber + 1)

    const innerHeight = useInnerHeight()
    const headerRect = useSelector(selectors.clientRectSelectors.selectHeaderRect)
    const footerRect = useSelector(selectors.clientRectSelectors.selectFooterRect)

    //console.log(headerRect.height)
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
            transform: "rotate(" + stamp_data.rotate + "deg)"
        }
        return <Box style={style} key={stamp_data.number}></Box>
    }

    const handleClickCanvas = (event) => {
        props.onClick(event)
        dispatch(set(currentList.length))
    }


    return(
        <Fragment>
            <Box
                id="canvas"
                className={classes.frame}
                onClick={(event) => handleClickCanvas(event)}
                onTouchStart={props.onTouchStart}
                onTouchEnd={props.onTouchEnd}
                >
                {currentList.map((value) => stamp(value))}
            </Box>
        </Fragment>
    )
}