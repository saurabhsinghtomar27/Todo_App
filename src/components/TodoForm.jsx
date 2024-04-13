import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    if (!todo) {
      toast.error("Please enter a todo item.");
      return;
    }
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
      <ToastContainer />
    </form>
  );
}

export default TodoForm;
