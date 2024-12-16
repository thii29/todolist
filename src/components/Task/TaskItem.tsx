import { useRef } from "react";
import trash from "../../assets/trash.svg"

const TaskItem = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  return (
    <div className="gap-6 mt-3 min-h-[72px] px-4 flex items-center bg-custom-gray-500 rounded-md">
      <label htmlFor="" className="relative w-6 h-6">
        <input
          ref={checkboxRef}
          type="checkbox"
          name="complete"
          id="complete"
          className="w-6 h-6 appearance-none peer border border-blue rounded-full checked:bg-purple checked:border-purple"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          onClick={() => checkboxRef?.current?.click()}
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          className="size-4 invisible peer-checked:visible absolute top-1 left-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </label>
      <p className="text-custom-gray-100 flex-1 text-sm font-inter">
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Modi nemo vel maiores ab ipsa quasi debitis, expedita autem hic.
      </p>
      <button>
        <img src={trash} alt="" />
      </button>
    </div>
  );
};

export default TaskItem;
