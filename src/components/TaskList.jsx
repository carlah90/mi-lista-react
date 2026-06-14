import TaskItem from './TaskItem';
import { useState } from "react";

function TaskList({ tareas, toggleTarea, eliminarTarea, agregarTarea }) {
 const [texto, setTexto] = useState("");

 const handleAdd = () => {
    if (texto.trim() === "") return;
    agregarTarea(texto);
    setTexto("");
 };

 return (
    <div className='task-list card'><h4>Tareas</h4>

    <input
     type="text"
     placeholder='Nueva tarea'
     value={texto}
     onChange={(e) =>setTexto(e.target.value)}
      />
      <button onClick={handleAdd}>Agregar</button>
      
      {tareas.map((t) => (
        <TaskItem
            key={t.id}
            tarea={t}
            toggleTarea={toggleTarea}
            eliminarTarea={eliminarTarea}
            />
      ))}
   </div>  
 );
}

export default TaskList;