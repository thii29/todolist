type Props = {
  placeHolder: string;
  width: string
};
const Input = ({ placeHolder, width }: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeHolder}
        className={`${width} h-[54px] px-4 py-4 font-inter bg-custom-gray-500 rounded-lg border border-1 border-custom-gray-700`}
      />
    </div>
  );
};

export default Input;
