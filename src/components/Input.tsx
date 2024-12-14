
type Props = {
  inputValue: string,
  onChangeInput:React.ChangeEventHandler<HTMLInputElement> | undefined
}

const Input = ({inputValue, onChangeInput}:Props) => {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="Add new task"
        onChange={onChangeInput}
        className="w-[638px] h-[54px] px-4 py-4 text-custom-gray-200 font-inter bg-custom-gray-500 rounded-lg border border-1 border-custom-gray-700"
      />
    </div>
  );
};

export default Input;
