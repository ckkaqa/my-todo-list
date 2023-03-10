import React, { useState } from 'react';

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
          className="border border-gray-500 rounded-lg p-2"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="bg-blue-500 text-white rounded-lg p-2">
          Add
        </button>
      </form>
      <ul className="mt-10">
        {todos.map((todo, index) => (
          <li key={index} className="border border-gray-500 rounded-lg p-2">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
