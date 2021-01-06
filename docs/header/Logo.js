import React from 'react'

function Logo(props){
    return(
        <img
            src="../static/img/logo.png"
            alt="stamp"
            width="160px"
            onClick={props.onClick}
            className="logo"
            />
    )
}

export default Logo