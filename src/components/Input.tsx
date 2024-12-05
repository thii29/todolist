type Props = {
  inputValue: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement> ;
};

const Input = ({ inputValue, onInputChange }: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Add new task"
        value={inputValue}
        onChange={onInputChange}
        className="w-[638px] h-[54px] px-4 py-4 font-inter bg-custom-gray-500 rounded-lg border border-1 border-custom-gray-700 text-custom-gray-100"
      />
    </div>
  );
};

export default Input;
