import { useRef } from "react";
import CheckIcon from "../Icons/CheckIcon";
import TrashIcon from "../Icons/TrashIcon";
import { TodoType } from "../../Types/Todo";

type Props = {
  task: TodoType;
  handleCheckTask: (idTask: number) => void;
  handleRemove: (idTask:number) => void;
};
const TaskItem = ({ task, handleCheckTask, handleRemove }: Props) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  
  return (
    <div className="gap-6 mt-3 min-h-[72px] px-4 py-4 flex items-center bg-custom-gray-500 rounded-md">
      <label htmlFor="" className="relative w-6 h-6">
        <input
          ref={checkboxRef}
          type="checkbox"
          name="check"
          id="check"
          onClick={() => handleCheckTask(task.id)}
          className="w-6 h-6 appearance-none peer border border-blue rounded-full checked:bg-purple checked:border-purple"
        />
        <CheckIcon
          onClick={() => {
            checkboxRef.current?.click();
            handleCheckTask(task.id);
          }}
        />
      </label>
      <p
        className={
          task.status === true
            ? "line-through text-custom-gray-300 flex-1 text-sm font-inter"
            : "text-custom-gray-100 flex-1 text-sm font-inter"
        }
      >
        {task.title}
      </p>
      <button onClick={()=>handleRemove(task.id)}>
        <TrashIcon />
      </button>
    </div>
  );
};

export default TaskItem;
