import { CountLabel } from './CountLabel';
import TaskGroup from './TaskGroup';

function TaskList() {
  return (
    <>
      <div className='w-[736px] flex flex-col justify-between mx-auto'>
        <CountLabel />
        <div className="my-6 max-w-[736px]">
          <TaskGroup />
        </div>
      </div>
    </>
  );
}

export default TaskList;
