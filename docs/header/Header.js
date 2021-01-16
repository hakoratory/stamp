import React from 'react'
import Logo from './Logo'
import AboutDialog from './AboutDialog';

function Header(props){
    return (
        <header>
            <Logo onClick={props.onClick} />
            <AboutDialog onClick={props.onClick}/>
        </header>
    )
}

export default Header