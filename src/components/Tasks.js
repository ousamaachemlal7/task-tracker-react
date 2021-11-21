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
        setTasks(restTaks);
        
    }

    // Toggle task reminder 
    const toggleReminder = (id) =>{
        console.log(id);
        setTasks(tasks.map(task => task.id==id ? {...task,reminder:!task.reminder} : task)) 
        console.log(tasks)
    }

    return (
        <div className="tasks" style={{marginLeft:'30%',padding:'1%' , width: '40%', borderStyle: 'groove '}}>
            { 
                
                tasks.length > 0 ? 
                    (
                        tasks.map(task=> (
                            <>
                                <Task  id={task.id} text={task.text} day={task.day} reminder={task.reminder} onDelete={deleteTask} onToggle={toggleReminder}/>
                                
                            </>    
                            
                            )
                        )
                    ) : ( 'No tasks to show')

                        
            

            }

        <Button className="Button-add" value="ADD TASK"  onClick={addTask} />
        </div>
    )
}

export default Tasks;
