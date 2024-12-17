type Props = {
  label: string;
  value: number;
};

export const CountLabel = ({ label, value }: Props) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 h-full">
        <span className="text-blue font-inter font-bold text-sm">{label}</span>
        <span className="text-custom-gray-200 text-sm font-inter rounded-xl bg-custom-gray-400 w-fit px-2">
          {value}
        </span>
      </div>
      <div className="flex gap-2 h-full">
        <span className="text-purple text-sm font-inter">Completed</span>
        <span className="text-custom-gray-200 text-sm font-inter rounded-xl bg-custom-gray-400 w-fit px-2">
          2 of {value}
        </span>
      </div>
    </div>
  );
};
