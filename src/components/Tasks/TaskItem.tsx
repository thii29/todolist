import { useContext, useRef } from 'react';

import { TodoContext } from '../../contexts/TodoContext';
import { ToDoType } from '../../Types/Todo';
import CheckIcon from '../Icons/CheckIcon';
import TrashIcon from '../Icons/TrashIcon';

const TaskItem = ({ title, checked, id }: ToDoType) => {
  const todoObjectProvider = useContext(TodoContext);

  const { handleRemoveTodo, handleTodoCheck } = todoObjectProvider;
  const checkboxRef = useRef<HTMLInputElement>(null);

  return (
    <div className="gap-6 mt-3 min-h-[72px] px-4 py-4 flex items-center bg-custom-gray-500 rounded-md">
      <label htmlFor="" className="relative w-6 h-6">
        <input
          ref={checkboxRef}
          type="checkbox"
          name="complete"
          id="complete"
          checked={checked}
          onChange={() => handleTodoCheck(id)}
          className="w-6 h-6 appearance-none peer border border-blue rounded-full checked:bg-purple checked:border-purple"
        />
        <CheckIcon
          onClick={() => {
            checkboxRef.current?.click();
            handleTodoCheck(id);
          }}
        />
      </label>
      <p
        className={`text-custom-gray-100 flex-1 text-sm font-inter ${
          checked && 'line-through opacity-50'
        }`}
      >
        {title}
      </p>
      <button>
        <TrashIcon onClick={() => handleRemoveTodo(id)} />
      </button>
    </div>
  );
};

export default TaskItem;
