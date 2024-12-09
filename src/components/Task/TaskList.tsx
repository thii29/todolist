import { TodoType } from "../../types";
import TaskItem from "./TaskItem";
import empty from "../../assets/empty.svg";

type Props = {
  tasks: TodoType[];
  handleCheck: (idTask: number) => void;
  handleRemove: (idTask: number) => void
};

function TaskList({ tasks, handleCheck, handleRemove }: Props) {
  const countFinishTask = tasks.reduce((initial, item) => {
    if (item.status === true) {
      return initial + 1;
    }
    return initial;
  }, 0);
  return (
    <div>
      <div className=" flex justify-between">
        <div className="flex gap-2 h-full">
          <span className="text-blue font-inter text-sm">Tasks created</span>
          <span className="text-custom-gray-200 text-sm font-inter rounded-xl bg-custom-gray-400 w-fit px-2">
            {tasks.length}
          </span>
        </div>
        <div className="flex gap-2 h-full">
          <span className="text-purple text-sm font-inter">Completed</span>
          <span className="text-custom-gray-200 text-sm font-inter rounded-xl bg-custom-gray-400 w-fit px-2">
            {countFinishTask} of {tasks.length}
          </span>
        </div>
      </div>
      <div className="mt-6 max-w-[736px]">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} handleCheck={handleCheck} handleRemove={handleRemove}/>)
        ) : (
          <div className="flex flex-col flex-1 justify-center items-center w-[736px] h-[244px] border-t-[1px] border-custom-gray-400 rounded-lg">
            <img src={empty} alt="empty" />
            <div className="flex flex-col items-center mt-4 text-custom-gray-300 font-inter">
              <span className="font-bold">
                You don't have tasks registered yet
              </span>
              <span> Create tasks and organize your to-do items</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;
