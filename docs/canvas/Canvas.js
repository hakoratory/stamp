import React, {Fragment, useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as selectors from '../redux/rootSelectors'
import { Box, makeStyles } from '@material-ui/core'
import {
    add,
    testStamp,
} from '../redux/ducks/stamp/list/actions'
import {
    set,
} from '../redux/ducks/stamp/step/actions'

export const useStylesCanvas = makeStyles((theme) => ({
    canvas: {
        border: "2px solid #808080",
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: height => height - 67 - 115
    },
}))

export default function Canvas(){
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
        }
        return <Box style={style} key={stamp_data.number}></Box>
    }

    const handleClick_canvas = (event) => {
        //dispatch(add({x: event.pageX, y: event.pageY, currentConf: currentConf}))
        console.log('currentList.length is ' + currentList.length)
        dispatch(add({x: event.pageX, y: event.pageY}))
        dispatch(set(currentList.length))
    }

    /* const handleTestStamp = () => {
        dispatch(testStamp())
        dispatch(set(4999))
    } */
    return(
        <Fragment>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Box id="canvas" className={classes.canvas} onClick={(event) => handleClick_canvas(event)}>
                    {currentList.map((value) => stamp(value))}
                </Box>
                {/* <button type="button" onClick={handleTestStamp}>test stamp</button> */}
            </Box>
        </Fragment>
    )
}