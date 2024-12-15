type Props = {
  label: string;
  value: number | string;
  labelClassName?: string;
};

const CountLabel = ({ label, value, labelClassName }: Props) => {
  return (
    <div className="flex gap-2 h-full">
      <span className={'text-blue font-inter text-sm ' + labelClassName}>
        {label}
      </span>
      <span className="text-custom-gray-200 text-sm font-inter rounded-xl bg-custom-gray-400 w-fit px-2">
        {value}
      </span>
    </div>
  );
};

export default CountLabel;
