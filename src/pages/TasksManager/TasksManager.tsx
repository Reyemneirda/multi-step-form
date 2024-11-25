import React from "react";
import { taskReducer } from "./TasksManager.reducer";

export const TasksManager: React.FC = () => {
  const [tasks, dispatch] = React.useReducer(taskReducer, []);
  const [taskInput, setTaskInput] = React.useState("");
  const taskInputRef = React.useRef<HTMLInputElement>(null);

  const addTask = React.useCallback(() => {
    if (taskInput.trim()) {
      dispatch({ type: "ADD", payload: taskInput });
      setTaskInput("");
      taskInputRef.current?.focus();
    }
  }, [taskInput]);

  const completedCount = React.useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );

  React.useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      dispatch({ type: "LOAD", payload: JSON.parse(savedTasks) });
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>
        <input
          ref={taskInputRef}
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
                onClick={() => dispatch({ type: "TOGGLE", payload: task.id })}
              >
                {task.title}
              </span>
              <button
                onClick={() => dispatch({ type: "DELETE", payload: task.id })}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <footer>
          <p>Completed: {completedCount}</p>
        </footer>
      </main>
    </div>
  );
};
