
import '../css/style.css';
import Task from './Task';

import React, {useState} from 'react';

const TaskList=()=>{

const [tasklist, setTaskList] =useState([]);

const handleTask = addTask =>{

     setTaskList(...[tasklist, addTask]);
     console.log (setTaskList);

};

    return (<>
    <Task handleTask={handleTask}></Task>

    </>);



}

export default TaskList;
