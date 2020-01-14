import React, { useState } from 'react'
import './card.css'

const Card = (props) => {
    const [clicked, toggleClick] = useState(false);

        return(
            <div  className='cardWrapper'>
                <div onClick={()=> toggleClick(!clicked)}>
                    <p className={clicked ? 'clickedTitle' :  "title"}>{props.title}</p>
                </div>
                <span className={clicked ? 'border' : 'border-closed'}/>
                <div className={clicked ? 'todo-text' : 'todo-text-closed'}>
                    <p className={clicked ? "taskText": "taskText-closed"}><span style={{fontStyle: 'italic'}}>Task: {' '}</span>{props.text}</p>
                </div>
            </div>
        )
}

export default Card;