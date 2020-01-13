import React, { useState } from 'react'
import './card.css'

const Card = (props) => {
    const [clicked, toggleClick] = useState(false);

        return(
            <div  className='cardWrapper'>
                <div onClick={()=> toggleClick(!clicked)}>
                    <p className={clicked ? 'clickedTitle' :  "title"}>{props.title}</p>
                </div>
                {clicked && 
                <div className='todo-text'>
                    <p>Task: </p>
                    <p>{props.text}</p>
                </div>}
            </div>
        )
}

export default Card;