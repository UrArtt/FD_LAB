import React, { useState } from "react";
import Form from "react-bootstrap/Form";
const TodoForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName("");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Wprowadź nowe zadanie"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type="submit" className="btn btn-primary" disabled={!taskName}>
          Dodaj
        </button>
      </div>
    </Form>
  );
};

export default TodoForm;
