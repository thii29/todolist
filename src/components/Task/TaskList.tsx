import TaskGroup from "./TaskGroup";

function TaskList() {
  return (
    <div>
      <div className="w-[736px] flex justify-between">
        <div className="flex gap-2 h-full">
          <span className="text-blue font-inter text-sm">Tasks created</span>
          <span className="text-custom-gray-200 text-sm font-inter rounded-xl bg-custom-gray-400 w-fit px-2">
            5
          </span>
        </div>
        <div className="flex gap-2 h-full">
          <span className="text-purple text-sm font-inter">Completed</span>
          <span className="text-custom-gray-200 text-sm font-inter rounded-xl bg-custom-gray-400 w-fit px-2">
            2 of 5
          </span>
        </div>
      </div>
      <div className="my-6 max-w-[736px]">
        <TaskGroup/>
      </div>
    </div>
  );
}

export default TaskList;
