import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'
import * as selectors from '../../../redux/rootSelectors'
import { useTouchToMouse } from '../../../hooks/useTouchToMouse'

export default function DummyStamp(props){
    const currentConf = useSelector(selectors.confSelectors.selectConf)

    const [dummyStamp, setDummyStamp] = useState({display: "none"})

    const showDummyStamp = (event) => {
        let style = {
            display: "inline",
            position: "absolute",
            left: (event.clientX - currentConf.width.value/2 - ref.current.getBoundingClientRect().left) + "px",
            top: (event.clientY - currentConf.height.value/2 - ref.current.getBoundingClientRect().top) + "px",
            width: currentConf.width.value + "px",
            height: currentConf.height.value + "px",
            borderRadius: currentConf.borderRadius.value + "px",
            backgroundColor: currentConf.backgroundColor.color.hex,
            opacity: currentConf.opacity.value,
            transform: "rotate(" + currentConf.rotate.value + "deg)",
        }
        setDummyStamp(style)
    }

    const hideDummyStamp = (event) => {
        let style = {
            display: "none"
        }
        setDummyStamp(style)
        
    }

    const setDummyStampStyle = (event) => {
        let style = {
            display: "inline",
            position: "absolute",
            left: (event.clientX - currentConf.width.value/2 - ref.current.getBoundingClientRect().left) + "px",
            top: (event.clientY - currentConf.height.value/2 - ref.current.getBoundingClientRect().top) + "px",
            width: currentConf.width.value + "px",
            height: currentConf.height.value + "px",
            borderRadius: currentConf.borderRadius.value + "px",
            backgroundColor: currentConf.backgroundColor.color.hex,
            opacity: currentConf.opacity.value,
            transform: "rotate(" + currentConf.rotate.value + "deg)",
        }
        setDummyStamp(style)
    }

    const handleMouseDown = (event) => {
        if(event.button !== 0){
            return
        }

        showDummyStamp(event, false)

        const handleMouseUp = (event) => {
            hideDummyStamp(event)
            props.onClick(event)
        
            document.removeEventListener('mousemove', handleMouseMove, {passive: true})
            document.removeEventListener('mouseup', handleMouseUp, {passive: false})
        }

        document.addEventListener('mousemove', handleMouseMove, {passive: true})
        document.addEventListener('mouseup', handleMouseUp, {passive: false})
    }

    const handleMouseMove = (event) => {
        setDummyStampStyle(event, false)
    }

/* 
    show the preview stamp when mouse entered.
    We will put implementation on hold for now because it conflicts with mouse down event.

    const handleMouseEnter = (event) => {
        console.log('mouse enter')
        showDummyStamp(event, false)

        const handleMouseLeave = (event) => {
            hideDummyStamp(event)
    
            document.removeEventListener('mousemove', handleMouseMove, {passive: true})
            document.removeEventListener('mouseleave', handleMouseLeave, {passive: true})
        }

        document.addEventListener('mousemove', handleMouseMove, {passive: true})
        document.addEventListener('mouseleave', handleMouseLeave, {passive: true})
    }
     */

    const ref = useTouchToMouse(false)

    return (
        <Box
            ref={ref}
            id="dummy"
            className={props.className}
            onMouseDown={handleMouseDown}
            >
            <Box style={dummyStamp}></Box>
        </Box>
    )
}