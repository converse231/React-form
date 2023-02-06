export const Task = (props) => {
  return (
    <div className="task">
      <h1 style={{ color: props.completed ? "green" : "red" }}>
        {props.taskName}
      </h1>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>delete</button>
    </div>
  );
};
