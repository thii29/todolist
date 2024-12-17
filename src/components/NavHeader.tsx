import Input from "./Input";

function NavHeader() {
  return (
    <div className="flex w-[736px] justify-between items-center mt-4">
      <div className="w-[352px] flex gap-2">
        <Input width="w-[263px]" inputProps={{
          placeholder: "Search"
        }}/>
        <button className="flex flex-row gap-1 bg-blue-dark text-gray-100 font-inter font-semibold rounded-lg justify-center items-center px-4 py-4 text-sm">
          Search
        </button>
      </div>
      <div className="w-[264px] flex gap-2">
        <button className="flex flex-row gap-1 w-[132px] bg-blue-dark text-gray-100 font-inter font-semibold rounded-lg justify-center items-center px-4 py-4 text-sm">All</button>
        <button className="flex flex-row gap-1 w-[132px] bg-blue-dark text-gray-100 font-inter font-semibold rounded-lg justify-center items-center px-4 py-4 text-sm">Completed</button>
      </div>
    </div>
  );
}

export default NavHeader;
