import { useContext, useRef } from 'react';
import { TaskItemType } from '../../Types/Task';
import { TaskContext } from '../../contexts/TaskContext';

const TaskItem = ({
  task,
  taskGroupId,
}: {
  task: TaskItemType;
  taskGroupId: number;
}) => {
  const { checkTaskItem } = useContext(TaskContext);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const { title, status } = task;
  return (
    <div className="gap-6 mt-3 min-h-[72px] px-4 py-4 flex items-center bg-custom-gray-500 rounded-md">
      <label htmlFor="" className="relative w-6 h-6">
        <input
          ref={checkboxRef}
          type="checkbox"
          name="complete"
          id="complete"
          checked={status}
          onChange={() => checkTaskItem(taskGroupId, task.id)}
          className="w-6 h-6 appearance-none peer border border-blue rounded-full checked:bg-purple checked:border-purple"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          onClick={() => checkboxRef?.current?.click()}
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          className="size-4 invisible peer-checked:visible absolute top-1 left-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </label>
      <p className="text-custom-gray-100 flex-1 text-sm font-inter">{title}</p>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          className="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
};

export default TaskItem;
