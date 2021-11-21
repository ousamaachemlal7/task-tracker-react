import React from 'react';
import Button from './Button';



const Header = (props) => {

    const handleAddTask = (e)=> {
        console.log("adding a  task")
        
    }

    return (
        <header className="header">

            <h1 style={{marginLeft:"45%"}} >{props.title}</h1>
            
            
        </header>
    )
}

export default Header;
