import React from 'react'
import {FaTimes} from 'react-icons/fa';
const Task = (props) => {
    console.log(props)
    return (
        <div  style={{color:'black', backgroundColor:'lightgrey'}}>
            <h2 > {props.id} <FaTimes style={{color:'red', cursor:'pointer'}} onClick= { () => props.onDelete(props.id)}/> </h2>
            <h3>{props.text} </h3>
            <h3>{props.day}</h3>
            
        </div>
    )
}

export default Task
 