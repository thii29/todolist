import { useContext, useState } from 'react';
import pluscircle from '../../assets/plus-circle.svg';
import { TodoContext } from '../../contexts/TodoContext';
import Input from '../Input';

type Props = {
  taskGroupID: number;
};
export const AddTodoForm = ({ taskGroupID }: Props) => {
  const [inputAddTask, setInputAddTask] = useState('');
  const { handleAddItem } = useContext(TodoContext);

  return (
    <>
      <Input
        width="w-[556px]"
        inputProps={{
          placeholder: 'Add new task',
          value: inputAddTask,
          onChange: (event) => setInputAddTask(event.target.value),
        }}
      />
      <button
        onClick={() =>
          handleAddItem(taskGroupID, inputAddTask, () => setInputAddTask(''))
        }
        className="flex flex-row gap-1 w-[103px] h-[52px] bg-blue-dark text-gray-100 font-inter font-semibold rounded-lg justify-center items-center px-4 py-4 text-sm"
      >
        Add
        <img src={pluscircle} alt="plus" className="w-5 h-5" />
      </button>
    </>
  );
};
