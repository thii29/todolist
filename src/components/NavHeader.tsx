import { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { SortTypeEnum } from '../Types/Task';
import Input from './Input';

const filterOptions = [
  { value: SortTypeEnum.ALL, label: 'All' },
  { value: SortTypeEnum.COMPLETED, label: 'Completed' },
];
function NavHeader() {
  const [inputSearch, setInputSearch] = useState('');
  const [sortType, setSortType] = useState(SortTypeEnum.ALL);

  const { handleSearch, handleSort } = useContext(TaskContext);

  const sortButtonClassName =
    'flex flex-row gap-1 w-[132px] bg-blue-dark text-gray-100 font-inter font-semibold rounded-lg justify-center items-center px-4 py-4 text-sm';

  const activeSortButtonClassName = `${sortButtonClassName} bg-blue text-gray-100`;

  return (
    <div className="flex w-[736px] justify-between items-center mt-4">
      <div className="w-[352px] flex gap-2">
        <Input
          width="w-[263px]"
          inputProps={{
            placeholder: 'Search',
            value: inputSearch,
            onChange: (e) => setInputSearch(e.target.value),
          }}
        />
        <button
          className="flex flex-row gap-1 bg-blue-dark text-gray-100 font-inter font-semibold rounded-lg justify-center items-center px-4 py-4 text-sm"
          onClick={() => handleSearch(inputSearch)}
        >
          Search
        </button>
      </div>
      <div className="w-[264px] flex gap-2">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            className={
              sortType === option.value
                ? activeSortButtonClassName
                : sortButtonClassName
            }
            onClick={() => {
              setSortType(option.value);
              handleSort(option.value);
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavHeader;
