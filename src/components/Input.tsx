type Props = {
  width: string;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};
const Input = ({ width, inputProps }: Props) => {
  return (
    <div>
      <input
        type="text"
        className={`${width} h-[54px] px-4 py-4 font-inter bg-custom-gray-500 rounded-lg border border-1 border-custom-gray-700 text-white`}
        {...inputProps}
      />
    </div>
  );
};

export default Input;
