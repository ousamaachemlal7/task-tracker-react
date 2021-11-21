import React from 'react'
import {FaTimes} from 'react-icons/fa';
import Button from './Button';

const Task = (props) => {
    console.log(props)
    return (
        <div className={`task-${props.reminder ? 'reminder' : ''}`} style={{borderStyle: 'groove ', width:'300px', marginBottom:'10px', color:'black', backgroundColor:'lightgrey'}} 
            >
            
            <h2 > {props.id} <FaTimes style={{color:'red', cursor:'pointer'}} onClick= {() => props.onDelete(props.id)}/> </h2>
            <h3>{props.text} </h3>
            <h3>{props.day}</h3>
            <Button value='Set reminder' className='btn-reminder' onClick={(e)=> props.onToggle(props.id)}/>
        </div>
    )
}

export default Task
 