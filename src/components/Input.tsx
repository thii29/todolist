import { InputHTMLAttributes } from 'react';

const Input = (
  props: React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Add new task"
        className="w-[638px] h-[54px] px-4 py-4 font-inter bg-custom-gray-500 rounded-lg border border-1 border-custom-gray-700 text-custom-gray-100"
        {...props}
      />
    </div>
  );
};

export default Input;
