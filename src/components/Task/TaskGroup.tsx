import pluscircle from '../../assets/plus-circle.svg';
import Input from '../Input';
import { CountLabel } from './CountLabel';
import TaskItem from './TaskItem';

const TaskGroup = () => {
  return (
    <div className="bg-custom-gray-700 w-[736px] rounded-md mt-1 p-1">
      <div className='p-3'>
        <CountLabel />
      </div>
      <div className="w-[652px] min-h-[72px] flex flex-col justify-center mx-10">
        <TaskItem />
        <TaskItem />
      </div>
      <div className="w-[652px] flex justify-center mx-10 my-4 gap-2 pb-3">
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
