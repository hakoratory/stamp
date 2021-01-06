import React from 'react'
import LogoImage from '../static/img/logo.png'

function Logo(props){
    return(
        <img
            src={LogoImage}
            alt="stamp"
            width="160px"
            onClick={props.onClick}
            className="logo"
            />
    )
}

export default Logo