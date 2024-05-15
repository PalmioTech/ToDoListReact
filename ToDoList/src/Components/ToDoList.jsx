import { useState } from "react";

export function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (inputTodo.trim()) {
      setTodos([...todos, inputTodo]);
      setValue("");
    }
  };

  const removeTodo = (indexRemoved) => {
    setTodos(todos.filter((_, index) => index !== indexRemoved));
  };

  const removeTodoList = (e) => {
    e.preventDefault();
    setTodos([]);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="bg-gray-400 rounded-lg m-2 border border-black p-1 text-center"
          value={inputTodo}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          className="p-1 bg-blue-700 text-white rounded-lg m-2"
          onClick={addTodo}
        >
          Aggiungi
        </button>
        <button
          className="p-1 bg-blue-700 text-white rounded-lg"
          onClick={removeTodoList}
        >
          Reset
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              className="p-1 items-center bg-red-600 m-2 rounded-full"
              onClick={() => removeTodo(index)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
