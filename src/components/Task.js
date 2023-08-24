
import '../css/style.css';
import React, {useState} from 'react';



const Task = (props)=> {

const [task, setTask]= useState("") ;
//const {addtask} = props;

const handletask =(e)=>{
e.preventDefault();
 
/*addtask ({
     id:0,
     text: task
  });*/

  console.log("hola");

}


return ( <>
<form onSubmit={handletask}>
<div className='write_tarea'>    
    <p> <input className='input' type='text' placeholder='Digite una Tarea' value={task} onChange={e =>setTask(e.target.value)}></input> </p>
    <p><button className='button' type='button' > Add</button></p>
</div>
</form>
</>
);}

export default Task;