import React from 'react'
import './App.css'
import { Divider,Button } from '@material-ui/core'
import Palette from './palette/Palette'
import Canvas from './canvas/Canvas'
import html2canvas from 'html2canvas'
import { connect } from 'react-redux'
import { add, change } from './redux/Store'

class App extends React.Component { 
    constructor(props){
        super(props)
    }

    handleChange = (event, newValue) => {
        this.props.dispatch(change(event, newValue))
    }

    handleClick = (event) => {
        this.props.dispatch(add(event))
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
                <Canvas onClick={this.handleClick} />
                <Divider variant="middle" />
                <Button variant="contained" color="primary" onClick={() => this.createImage()}>
                    create img
                </Button>
                <Palette
                    onChange={(event, newValue) => this.handleChange(event,newValue)}
                    />
            </div>
        )
    }
}

App = connect((state) => state)(App)
export default App