
type Props = {
  inputValue: string,
  onInputChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
}
const Input = ({inputValue, onInputChange}:Props) => {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Add new task"
        className="w-[638px] h-[54px] px-4 py-4 font-inter text-custom-gray-200 bg-custom-gray-500 rounded-lg border border-1 border-custom-gray-700"
      />
    </div>
  );
};

export default Input;
