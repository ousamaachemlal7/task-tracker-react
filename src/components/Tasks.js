import React,{useState} from 'react';
import {Data} from './Data';
import Task from './Task';
import Button from './Button';

const Tasks = () => {
    const [tasks,setTasks] = useState(Data);
    
    const addTask = () => {

    }
    
    const deleteTask = (id) => {
        const restTaks = tasks.filter(task => task.id !== id);
        console.log(restTaks)
        setTasks(restTaks);
        
    }

    return (
        <div className="tasks">
            { 
                tasks.map(task=> (
                    <div  className="task">
                        <Task  id={task.id} text={task.text} day={task.day} onDelete={deleteTask} />
                        <Button value='Update' className='btn-update' />
                        <Button value='Delete' className='btn-delete' />
                    </div>
                    )
                )

            }

        <Button className="Button-add" value="ADD TASK"  onClick={addTask} />
        </div>
    )
}

export default Tasks;
