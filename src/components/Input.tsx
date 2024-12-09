type Props = {
  inputValue: string
  onChangeValue: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const Input = ({inputValue, onChangeValue}:Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Add new task"
        value={inputValue}
        onChange={onChangeValue}
        className="w-[638px] h-[54px] px-4 py-4 text-custom-gray-200 font-inter bg-custom-gray-500 rounded-lg border border-1 border-custom-gray-700"
      />
    </div>
  );
};

export default Input;
