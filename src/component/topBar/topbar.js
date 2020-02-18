import React from 'react'
import './topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBars } from '@fortawesome/free-solid-svg-icons'

const topBar = (props) => {
    return(
        <div className='topbar'>
            <div onClick={props.onClick}>
                <FontAwesomeIcon style={{width: '1.3rem', height: '1.3rem'}} icon={faBars}/>
            </div>
            <h1 className='text'>TODO LIST</h1>
            <div className="iconSquare">
                <FontAwesomeIcon style={{width: '1rem', height: '1rem'}} icon={faPlus}/>
            </div>
        </div>
    )
}

export default topBar