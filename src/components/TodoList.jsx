import React from "react";
import Button from "react-bootstrap/Button";
const TodoList = ({ tasks, removeTask }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {task.name}
          <Button
            onClick={() => removeTask(task.id)}
            className="btn btn-danger btn-sm"
          >
            Usuń
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
