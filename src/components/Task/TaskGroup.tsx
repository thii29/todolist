import { TaskGroupType } from '../../Types/Task';
import CountLabel from '../Common/CountLabel';
import AddTaskItemForm from './AddTaskItemForm';
import TaskItem from './TaskItem';

const TaskGroup = ({ taskGroup }: { taskGroup: TaskGroupType }) => {
  const { title, tasks } = taskGroup;
  const totalTaskItem = tasks?.length || 0;
  const taskGroupId = taskGroup.id;

  const totalTaskItemChecked = tasks?.filter(
    (task) => task.status === true
  )?.length;
  return (
    <div className="bg-custom-gray-700 w-[736px] rounded-md pb-1 mt-4">
      <div className="flex justify-between p-4">
        <CountLabel
          label={title.toUpperCase()}
          labelClassName="font-bold"
          value={totalTaskItem}
        />
        <CountLabel
          label={'Completed'.toUpperCase()}
          labelClassName="font-bold"
          value={`${totalTaskItemChecked} of ${totalTaskItem}`}
        />
      </div>
      <div className="w-[652px] flex flex-col justify-center mx-10 mb-3">
        {tasks?.map((task, index) => (
          <TaskItem key={index} task={task} taskGroupId={taskGroupId} />
        ))}
      </div>

      <AddTaskItemForm taskGroupId={taskGroupId} />

      <div className="w-full flex justify-center pb-4">
        <button className="hover:bg-red-400 hover:border-red-600 border rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TaskGroup;
