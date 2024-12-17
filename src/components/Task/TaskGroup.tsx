import { TodoGroupType } from '../../types';
import { AddTodoForm } from './AddTodoForm';
import { CountLabel } from './CountLabel';
import TaskItem from './TaskItem';

type Props = {
  taskGroup: TodoGroupType;
};
const TaskGroup = ({ taskGroup }: Props) => {
  const { name, tasks } = taskGroup;
  return (
    <div className="bg-custom-gray-700 w-[736px] rounded-md mt-3 p-1">
      <div className="p-3 ">
        <CountLabel label={name.toUpperCase()} value={0}/>
      </div>
      <div className="w-[652px] flex flex-col justify-center mx-10">
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </div>
      <div className="w-[652px] flex justify-center mx-10 my-4 gap-2 pb-3">
        <AddTodoForm />
      </div>
    </div>
  );
};

export default TaskGroup;
