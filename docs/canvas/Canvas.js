import React from 'react'
import { useSelector } from 'react-redux'
import * as selectors from '../redux/rootSelectors'

export default function Canvas(props){

    const stampList = useSelector(selectors.listSelectors.selectList)

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
        return <div style={style} key={stamp_data.number}></div>
    }
    
    return(
        <div id="canvas" className="canvas_style" onClick={props.onClick}>
            {stampList.map((value) => stamp(value))}
        </div>
    )
}