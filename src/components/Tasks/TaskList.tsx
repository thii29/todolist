import { TodoType } from "../../Types/Todo";
import TaskItem from "./TaskItem";
import Empty from "../Icons/EmptyIcon";

type Props = {
  tasks: TodoType[];
  setTasks: React.Dispatch<React.SetStateAction<TodoType[]>>;
};
function TaskList({ tasks, setTasks }: Props) {
  const countTaskDone = tasks.reduce((count, item) => {
    if (item.status === true) {
      return count + 1;
    }
    return count;
  }, 0);

  const handleCheckTask = (idTask: number) => {
    const updateTask = tasks.map((item) => {
      if (item.id === idTask) {
        const newItem = { ...item, status: !item.status };
        return newItem;
      }
      return item;
    });
    setTasks(updateTask);
  }

  const handleRemove = (idTask:number) => {
    const newTaskList = tasks.filter(item => {
      return item.id !== idTask
    })
    setTasks(newTaskList)
  }
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
        {tasks.length === 0 ? (
          <div className="w-[736ox] h-[244px] flex flex-col justify-center items-center border-t-[1px] border-custom-gray-400 rounded-md">
            <Empty />
            <div className="text-custom-gray-300 font-inter text-base flex flex-col items-center mt-4 ">
              <p className="font-bold">You don't have tasks registered yet</p>
              <p>Create tasks and organize your to-do items</p>
            </div>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskItem task={task} handleCheckTask={handleCheckTask} handleRemove={handleRemove}/>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
