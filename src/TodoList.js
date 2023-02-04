import React, { useState } from 'react';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <form onSubmit={handleSubmit}>

        <input
          className="border border-gray-500 rounded-lg p-2 mr-10"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </form>
      <ul className="mt-10">
        {todos.map((todo, index) => (
          <li>
            <Todo 
              task = {todo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
