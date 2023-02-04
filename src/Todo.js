import React, { useState } from 'react';

function Todo({ task }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange}
        className="mr-2"
      />
      <span className={`rounded-lg p-2 ${isCompleted ? 'line-through' : ''}`}>
        {task}
      </span>
    </label>
  );
}


export default Todo;
