import React from 'react'
import './App.css'
import { Divider,Button } from '@material-ui/core'
import Palette from './palette/Palette'
import Canvas from './canvas/Canvas'
import html2canvas from 'html2canvas'

class App extends React.Component { 
    data = []
    number = 0

    conf = {
        width: 50,
        height: 50,
        borderRadius: 10,
        opacity: 0.5,
        backgroundColor: "#ff8300",
    }

    preview = this.getPreview(this.conf)

    constructor(props){
        super(props)
        this.state = {
            list: this.data,
            conf: this.conf,
            preview: this.preview,
        }
    }

    getPreview(conf){
        return {
            width: conf.width + "px",
            height: conf.height + "px",
            borderRadius: conf.borderRadius + "px",
            opacity: conf.opacity,
            backgroundColor: conf.backgroundColor,
        }
    }

    handleChange = (event, newValue) => {
        let newConf = {...this.state.conf}
        switch(event.target.id){
            case "width":
                newConf.width = newValue
                break
            case "height":
                newConf.height = newValue
                break
            case "borderRadius":
                newConf.borderRadius = newValue
                break
            case "opacity":
                newConf.opacity = newValue
                break
            case "backgroundColor":
                newConf.backgroundColor = newValue
                break
            default:

        }

        let newPreview = {...this.getPreview(newConf)}

        this.setState({
            conf: newConf,
            preview: newPreview,
        })
    }

    handleClick = (event) => {
        this.number++
        let x = event.pageX
        let y = event.pageY

        this.data.push({
            x: x,
            y: y,
            number: this.number,
            width: this.state.conf.width,
            height: this.state.conf.height,
            borderRadius: this.state.conf.borderRadius,
            opacity: this.state.conf.opacity,
            backgroundColor: this.state.conf.backgroundColor
        })
        this.setState({list: this.data})
    }

    createImage(){
        html2canvas(document.querySelector('#canvas')).then(canvas => {
            document.body.appendChild(canvas)
        })
    }

    render(){
        return(
            <div>
                <h1>Stamp artist</h1>
                <Canvas onClick={this.handleClick} data={this.data} />
                <Divider variant="middle" />
                <Button variant="contained" color="primary" onClick={() => this.createImage()}>
                    create img
                </Button>
                <Palette
                    conf={this.state.conf}
                    preview={this.state.preview}
                    onChange={(event, newValue) => this.handleChange(event,newValue)}
                    />
            </div>
        )
    }
}

export default App