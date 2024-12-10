import Input from "../Input";
import TaskItem from "./TaskItem";
import pluscircle from "../../assets/plus-circle.svg";

const TaskGroup = () => {
  return (
    <div className="bg-custom-gray-700 w-[736px] rounded-md pb-1">
      <div className="flex justify-between">
        <div className="flex gap-2 px-2 py-6 h-full ml-6">
          <span className="text-blue font-inter text-sm font-bold uppercase">
            group A
          </span>
          <span className="text-custom-gray-200 text-sm font-inter rounded-xl bg-custom-gray-400 w-fit px-2">
            2
          </span>
        </div>
        <div className="flex gap-2 h-full px-2 py-6 mr-6">
          <span className="text-purple text-sm font-inter font-bold">
            Completed
          </span>
          <span className="text-custom-gray-200 text-sm font-inter rounded-xl bg-custom-gray-400 w-fit px-2">
            2 of 5
          </span>
        </div>
      </div>
      <div className="w-[652px] min-h-[72px] flex justify-center mx-10 mb-3">
        <TaskItem />
      </div>
      <div className="w-[652px] flex justify-center mx-10 mb-3 gap-2 pb-3">
        <Input placeHolder="Add new task" width="w-[556px]" />
        <button className="flex flex-row gap-1 w-[103px] h-[52px] bg-blue-dark text-gray-100 font-inter font-semibold rounded-lg justify-center items-center px-4 py-4 text-sm">
          Add
          <img src={pluscircle} alt="plus" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TaskGroup;
