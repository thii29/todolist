import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { SortTypeEnum } from '../types';
import Input from './Input';

const filterOption = [
  {
    value: SortTypeEnum.ALL,
    label: 'All',
  },
  {
    value: SortTypeEnum.COMPLETED,
    label: 'Completed',
  },
];

function NavHeader() {
  const [inputSearch, setInputSearch] = useState('');
  const { handleSearch, handleSort } = useContext(TodoContext);
  const [sortType, setSortType] = useState(SortTypeEnum.ALL);

  const sortButtonClassName =
    'flex flex-row gap-1 w-[132px] bg-blue-dark text-gray-100 font-inter font-semibold rounded-lg justify-center items-center px-4 py-4 text-sm';
  const activeSortButtonClassName = `${sortButtonClassName} bg-blue text-gray-100`;
  return (
    <div className="flex w-[736px] justify-between items-center mt-4">
      <div className="w-[352px] flex gap-2">
        <Input
          width="w-[263px]"
          inputProps={{
            value: inputSearch,
            placeholder: 'Search',
            onChange: (e) => setInputSearch(e.target.value),
          }}
        />
        <button
          onClick={() => handleSearch(inputSearch)}
          className="flex flex-row gap-1 bg-blue-dark text-gray-100 font-inter font-semibold rounded-lg justify-center items-center px-4 py-4 text-sm"
        >
          Search
        </button>
      </div>
      <div className="w-[264px] flex gap-2">
        {filterOption.map((option) => (
          <button
            key={option.value}
            onClick={() => {
              setSortType(option.value);
              handleSort(option.value);
            }}
            className={
              sortType === option.value
                ? activeSortButtonClassName
                : sortButtonClassName
            }
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavHeader;
