function taskItem ({ tarea, toggleTarea, eliminarTarea}) {
    return (
        <div className="task-item">
            <input
            
            
            type="checkbox"
            checked={tarea.completada}
            onChange={() => toggleTarea(tarea.id)} 
            />
            <span className={tarea.completada ? "done": ""}>
                {tarea.texto}
            </span>
            <button onClick={() => eliminarTarea(tarea.id)}>X</button>
        </div>
    );
}

export default taskItem;