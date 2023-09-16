import { useState, useContext } from "react";
import "./TaskForm.css";
import { tasks } from "../data/Tasks";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { createTask } = useContext(TaskContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title: title,
      id: tasks.length + 1,
      description: desc,
      done: false,
    });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={HandleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3">Create your task</h1>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <input className="bg-slate-300 p-3 w-full mb-2" type="text" placeholder="Responsible" />
        <input className="bg-slate-300 p-3 w-full mb-2" type="text" placeholder="Priority" />
        <button 
        className="bg-indigo-500 px-3 py-1 text-white rounded-md mt-4 hover:bg-indigo-400"
        type="submit">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
