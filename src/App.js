import logo from './logo.svg';
import './App.css';
import './css/style.css';
import TaskList from './components/TaskList';
import TaskAll from './components/TaskAll';


import { useState } from 'react';



function App() {
  /*const [state,setState] = useState ("");*/

  return ( <>

 {/* <!--<main> 
    <p><h1>Lista de Tareas</h1></p>
   <TaskList></TaskList>    
      <div className='contenedor_tarea'>
      <div className='tarea'></div>
      <p><button className='button' type='button'>Eliminar</button></p>
      </div>
  </main>
  */}
  <TaskAll></TaskAll>

  </>  
    
  );
}


export default App;
