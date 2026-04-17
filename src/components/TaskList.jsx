function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <li className="empty">No hay tareas todavía.</li>
      ) : (
        tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.text}</span>
            <button onClick={() => onDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))
      )}
    </ul>
  );
}

export default TaskList;