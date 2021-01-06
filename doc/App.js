import React from 'react'
import './App.css'
import { Grid } from '@material-ui/core'
import Palette from './palette/Palette'
import Canvas from './canvas/Canvas'
import { connect } from 'react-redux'
import { add, change, reset } from './redux/Store'

class App extends React.Component { 
    constructor(props){
        super(props)
    }

    handleChange = (event, newValue) => {
        this.props.dispatch(change(event, newValue))
    }

    handleClick_canvas = (event) => {
        this.props.dispatch(add(event))
    }

    handleClick_button = (event, id) => {
        switch(id){
            case "RESET":
            this.props.dispatch(reset())
        }
        
    }

    header_style = { 
        backgroundColor: "#C0C0C0"
    }

    render(){
        return(
            <div>
                <header style={this.header_style}>
                    <h1>Stamp</h1>
                </header>
                <Grid container spacing={4}>
                    <Grid item md={6} sm={12} xs={12}>
                        <Canvas onClick={this.handleClick_canvas} />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <Palette
                            onChange={(event, newValue) => this.handleChange(event,newValue)}
                            onClick={this.handleClick_button}
                            />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

App = connect((state) => state)(App)
export default App