import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import Empty from '../Empty';
import { CountLabel } from './CountLabel';
import TaskGroup from './TaskGroup';

function TaskList() {
  const { taskGroupList } = useContext(TodoContext);

  const totalGroupTask = taskGroupList.length;
  return (
    <>
      <div className="w-[736px] flex flex-col justify-between mx-auto">
        <CountLabel label="Task created" value={totalGroupTask}/>
        <div className="my-6 max-w-[736px]">
          {taskGroupList.length > 0 ? (
            taskGroupList.map((taskGroup, index) => (
              <TaskGroup key={index} taskGroup={taskGroup} />
            ))
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </>
  );
}

export default TaskList;
