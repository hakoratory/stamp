import React from 'react'
import './static/css/App.css'
import Header from './header/Header'
import { Grid } from '@material-ui/core'
import Palette from './palette/Palette'
import Canvas from './canvas/Canvas'
import { connect } from 'react-redux'
import { add, changeWidth, changeHeight, changeBorderRadius, changeOpacity, changeColor, reset, modal } from './redux/Store'

class App extends React.Component { 
    constructor(props){
        super(props)
    }

    handleChange = (event, newValue) => {
        switch(event.target.id){
            case "width":
                this.props.dispatch(changeWidth(event, newValue))
                break
            case "height":
                this.props.dispatch(changeHeight(event, newValue))
                break
            case "border radius":
                this.props.dispatch(changeBorderRadius(event, newValue))
                break
            case "opacity":
                this.props.dispatch(changeOpacity(event, newValue))
                break
            case "background color":
                this.props.dispatch(changeColor(event, newValue))
                break
            default:

        }
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

    handleClick_modal = () => {
        this.props.dispatch(modal())
    };

    render(){
        return(
            <div>
                <Header onClick={this.handleClick_modal}/>
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