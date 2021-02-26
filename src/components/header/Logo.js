import React, { useEffect, useRef } from 'react'
import LogoImage from '../../static/img/logo.png'

function Logo(props){
    return(
        <img
            src={LogoImage}
            alt="stamp"
            height="100%"
            className="logo"
            />
    )
}

export default Logo