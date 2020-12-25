import React from 'react'

class Canvas extends React.Component{
    canvas_style = {
        width: "100%",
        height: "500px",
        border: "2px solid #808080",
        marginBottom: "30px",
    }

    stamp(stamp_data){
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
    render(){
        return(
            <div style={this.canvas_style} onClick={this.props.onClick}>
                {this.props.data.map((value) => this.stamp(value))}
            </div>
        )
    }
}

export default Canvas

