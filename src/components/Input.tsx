type Props = {
  inputProps: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  width: string;
};
const Input = ({ inputProps, width }: Props) => {
  return (
    <div>
      <input
        type="text"
        className={`${width} h-[54px] px-4 py-4 font-inter text-custom-gray-200 bg-custom-gray-500 rounded-lg border border-1 border-custom-gray-700`}
        {...inputProps}
      />
    </div>
  );
};

export default Input;
