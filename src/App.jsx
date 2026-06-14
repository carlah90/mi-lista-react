import { useState } from 'react';
import TaskList from './components/TaskList';
import RememberCard from './components/RememberCard';
import MotivationalCard from './components/MotivationalCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import "./App.css";
function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    setTareas([...tareas, {id: Date.now(), texto, completada: false}])
  };

  const toggleTarea = (id) => {
    setTareas(
      tareas.map(t =>
        t.id === id ? { ...t, completada: !t.completada} : t
     )
   );
 };
  
 const eliminarTarea = (id) => {
  setTareas(tareas.filter(t => t.id !== id)); 
 }; 

 const pendientes = tareas.filter(t => !t.completada).length;

 const [temaOscuro, setTemaOscuro] = useState(false);

 return (
  <div className={`app-container ${temaOscuro ? "oscuro" : "claro"}`}>
    <header className='header'>
       <h2>Mi Lista</h2>
    </header>
     
    <button onClick={() => setTemaOscuro(!temaOscuro)} className='btn-tema'>
      <FontAwesomeIcon icon={temaOscuro ? faMoon : faSun} />
    </button>

    <MotivationalCard/>
    <RememberCard pendientes={pendientes}/>

   <TaskList
     tareas={tareas}
     toggleTarea={toggleTarea}
     eliminarTarea={eliminarTarea}
     agregarTarea={agregarTarea}
   />
  </div>
  
 );
}

export default App
