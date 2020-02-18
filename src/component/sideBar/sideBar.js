import React, {useState} from 'react'
import propTypes from 'prop-types'
import './sideBar.css'

const Body = props => {
    return(
        <div className="sidebarBody-mini" id={props.isSlideBarOpen ? "sidebarBody" : "sidebarBody-closed"}> 
            <div onClick={props.onClick} id={props.isSlideBarOpen ? "backgroundBody": "backgroundBody-closed"}/>
        </div>
    )
}

Body.propTypes = {
    onClick: propTypes.func
}

export default Body

