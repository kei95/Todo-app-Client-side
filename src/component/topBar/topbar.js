import React from 'react'
import './topbar.css'

const topBar = (props) => {
    return(
        <div className='topbar' >
            {/* <span>{`😺️`}</span> */}
                <h1 className='text'>Your todo-list</h1>
            {/* <span>{`⚙️`}</span>    */}
        </div>
    )
}

export default topBar