import empty from '../assets/empty.svg';

const Empty = () => {
  return (
    <div className="w-[736ox] h-[244px] flex flex-col justify-center items-center border-t-[1px] border-custom-gray-400 rounded-md">
      <img src={empty} alt="" />
      <div className="text-custom-gray-300 font-inter text-base flex flex-col items-center mt-4 ">
        <p className="font-bold">You don't have tasks registered yet</p>
        <p>Create tasks and organize your to-do items</p>
      </div>
    </div>
  );
};
export default Empty
