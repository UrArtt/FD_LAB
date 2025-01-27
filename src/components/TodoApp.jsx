import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Taski = [
  {
    name: "Zadanie",
    id: crypto.randomUUID,
  },
];
const TodoApp = () => {
  const [tasks, setTasks] = useState(Taski);

  const addTask = (taskName) => {
    setTasks([...tasks, { id: crypto.randomUUID(), name: taskName }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center my-4">Lista zadań</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default TodoApp;
