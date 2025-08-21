import { useState } from "react";
import type { CSSProperties } from "react";
import { TaskItem } from "../models/TaskItem.model";
import { TaskInput } from "../models/TaskInput.model";

export default function ToDoList() {
  const style: CSSProperties = {
    display: "flex",
    margin: "auto",
    flexDirection: "column",
    maxWidth: "400px",
    gap: "10px",
  };

  const [toDoList, setToDoList] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setToDoList([...toDoList, newTask]);
    setNewTask("");
  };

  const deleteTask = (index: number) => {
    setToDoList(toDoList.filter((_, i) => i !== index));
  };

  return (
    <div style={style}>
      <h1>To-Do List</h1>
      <TaskInput 
      newTask={newTask}
      setNewTask={setNewTask}
      onAdd={addTask}
      />

      <ul>
        {toDoList.map((task, index) => (
          <TaskItem
          task={task}
          index={index}
          onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}
