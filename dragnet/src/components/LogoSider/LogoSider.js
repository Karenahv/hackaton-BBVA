import React from 'react'
import './LogoSider.scss'


const LogoSidebar = ({logo}) => {
    return (
        <div id='icono-sidebar'>
            <img src={logo} alt='Home'/>
        </div>

    )
}

export default LogoSidebar