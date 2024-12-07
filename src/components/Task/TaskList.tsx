import { TodoType } from "../../types";
import TaskItem from "./TaskItem";
import empty from "../../assets/empty.svg";

type Props = {
  tasks: TodoType[];
};
function TaskList({ tasks }: Props) {
  const countTaskDone = tasks.reduce((count, item) => {
    if (item.status === true) {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <div>
      <div className="w-[736px] flex justify-between">
        <div className="flex gap-2 h-full">
          <span className="text-blue font-inter text-sm">Tasks created</span>
          <span className="text-custom-gray-200 text-sm font-inter rounded-xl bg-custom-gray-400 w-fit px-2">
            {tasks.length}
          </span>
        </div>
        <div className="flex gap-2 h-full">
          <span className="text-purple text-sm font-inter">Completed</span>
          <span className="text-custom-gray-200 text-sm font-inter rounded-xl bg-custom-gray-400 w-fit px-2">
            {countTaskDone} of {tasks.length}
          </span>
        </div>
      </div>
      <div className="mt-6 max-w-[736px]">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskItem task={task} />)
        ) : (
          <div className="mt-6 flex flex-col justify-center items-center w-[737px] h-[244px] text-custom-gray-300 border-t-[1px] border-custom-gray-400 rounded-lg">
            <div className="flex">
              <img src={empty} alt="" />
            </div>
            <p className="font-bold mt-4">
              You don't have tasks registered yet
            </p>
            <p>Create tasks and organize your to-do items</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;
