import React from 'react'
import Logo from './Logo'
import { connect } from 'react-redux'
import AboutDialog from './AboutDialog';

class Header extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <header>
                <Logo onClick={this.props.onClick} />
                <AboutDialog onClick={this.props.onClick}/>
            </header>
        )
    }
}

Header = connect((state) => state)(Header)
export default Header