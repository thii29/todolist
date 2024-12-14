import { useContext } from "react";
import TaskItem from "./TaskItem";
import { TodoContext } from "../../context/TodoContext";

import empty from "../../assets/empty.svg";

function TaskList() {
  const taskObjContext = useContext(TodoContext);
  const { tasks } = taskObjContext;

  const totalFinish = tasks.reduce((initial, item)=>{
    if(item.status === true){
      return ++initial
    }
    return initial
  } ,0)
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
            {totalFinish} of {tasks.length}
          </span>
        </div>
      </div>
      <div className="mt-6 max-w-[736px]">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskItem key={task.id} task={task}/>)
        ) : (
          <div className=" w-[736px] h-[244px] flex flex-col flex-1 justify-center items-center  text-custom-gray-300 border-t-[1px] rounded-lg border-custom-gray-400">
            <img src={empty} alt="" />
            <div className="flex flex-col mt-4 justify-center items-center">
              <span className="font-bold">
                You don't have tasks registered yet.
              </span>
              <span> Create tasks and organize your to-do items.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskList;
