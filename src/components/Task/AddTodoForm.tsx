import pluscircle from '../../assets/plus-circle.svg';
import Input from '../Input';

export const AddTodoForm = () => {
  return (
    <>
      <Input width="w-[556px]" inputProps={{ placeholder: 'Add new task' }} />
      <button className="flex flex-row gap-1 w-[103px] h-[52px] bg-blue-dark text-gray-100 font-inter font-semibold rounded-lg justify-center items-center px-4 py-4 text-sm">
        Add
        <img src={pluscircle} alt="plus" className="w-5 h-5" />
      </button>
    </>
  );
};
