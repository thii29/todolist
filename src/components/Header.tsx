import rocket from "../assets/rocket.svg";
import pluscircle from "../assets/plus-circle.svg";
import Input from "./Input";


type Props = {
  handleAdd: React.MouseEventHandler<HTMLButtonElement> | undefined
};

function Header({ handleAdd }: Props) {
  
  return (
    <div className="relative bg-custom-gray-700 w-full h-52">
      {/* Title header */}
      <div className="h-full flex gap-3 justify-center items-center">
        {/* height of children should be equal with parent, so it can be align item center */}
        <img src={rocket} alt="rocket" className="w-[22px] h-36px" />
        <div className="flex flex-row text-4xl font-black">
          <h1 className="text-blue font-inter">to</h1>
          <h1 className="text-purple-dark font-inter">do</h1>
        </div>
      </div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-sm">
        <form className="flex gap-2">
          <Input/>
          <button
            onClick={handleAdd}
            className="flex flex-row gap-1 w-[90px] h-[52px] bg-blue-dark text-gray-100 font-inter font-semibold rounded-lg justify-center items-center px-4 py-4 text-sm"
          >
            Create
            <img src={pluscircle} alt="plus" className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
