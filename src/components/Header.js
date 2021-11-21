import React from 'react';
import Button from './Button';



const Header = (props) => {

    const handleAddTask = (e)=> {
        console.log("adding a  task")
        
    }

    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button className="Button-add" value="ADD TASK"  onClick={handleAddTask} />
            
        </header>
    )
}

export default Header;
