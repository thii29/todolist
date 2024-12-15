import { useContext, useState } from 'react';
import pluscircle from '../../assets/plus-circle.svg';
import { TaskContext } from '../../contexts/TaskContext';
import Input from '../Input';

const AddTaskItemForm = ({ taskGroupId }: { taskGroupId: number }) => {
  const [inputAddTask, setInputAddTask] = useState('');
  const { addTaskItem } = useContext(TaskContext);

  const onAddSuccess = () => {
    setInputAddTask('');
  };

  return (
    <div className="w-[652px] flex justify-center mx-10 mb-3 gap-2 pb-3">
      <Input
        width="w-[556px]"
        inputProps={{
          placeholder: 'Add new task',
          onChange: (e) => setInputAddTask(e.target.value),
          value: inputAddTask,
        }}
      />
      <button
        className="flex flex-row gap-1 w-[103px] h-[52px] bg-blue-dark text-gray-100 font-inter font-semibold rounded-lg justify-center items-center px-4 py-4 text-sm"
        onClick={() => addTaskItem(taskGroupId, inputAddTask, onAddSuccess)}
      >
        Add
        <img src={pluscircle} alt="plus" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default AddTaskItemForm;
