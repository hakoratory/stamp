import React, {Fragment, useState, useEffect, useRef, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as selectors from '../redux/rootSelectors'
import { Box, makeStyles } from '@material-ui/core'
import {
    add,
} from '../redux/ducks/stamp/list/actions'
import {
    set,
} from '../redux/ducks/stamp/step/actions'

export const useStylesCanvas = makeStyles((theme) => ({
    frame: {
        
    },
    canvas: {
        //position: "relative",
        border: "2px solid #808080",
        backgroundColor: "#FFFFFF",
        width: "80%",
        height: height => height - 67 - 115,
        margin: "auto",
    },
}))


export default function Canvas(props){
    const dispatch = useDispatch()
    
    const stepNumber = useSelector(selectors.listSelectors.selectStepNumber)
    console.log('stepNumber is ' + stepNumber)
    const list = useSelector(selectors.listSelectors.selectList)
    const currentList = list.slice(0, stepNumber + 1)

    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const onResize = () => {
            return setHeight(window.innerHeight)
        }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [height])

    /* const [canvasX, setCanvasX] = useState(0)
    const [canvasY, setCanvasY] = useState(0)

    const measuredRef = useCallback(node => {
        if(node !== null){
            setTimeout(function(){
                setCanvasX(node.getBoundingClientRect().left + window.pageXOffset)
                setCanvasY(node.getBoundingClientRect().top + window.pageYOffset)
            },1000)   
        }
    },[]) */


    const classes = useStylesCanvas(height)

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
        /* dispatch(add({x: event.pageX, y: event.pageY}))
        dispatch(set(currentList.length)) */
    }


    /* const handleTestStamp = () => {
        dispatch(testStamp())
        dispatch(set(4999))
    } */

    return(
        <Fragment>
            <Box
                id="canvas"
                className={classes.canvas}
                onClick={(event) => handleClickCanvas(event)}
                /* ref={measuredRef} */
                onTouchStart={props.onTouchStart}
                onTouchEnd={props.onTouchEnd}
                >
                {currentList.map((value) => stamp(value))}
            </Box>
            {/* <button type="button" onClick={handleTestStamp}>test stamp</button> */}
        </Fragment>
    )
}