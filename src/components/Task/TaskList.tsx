import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import Empty from '../Empty';
import { CountLabel } from './CountLabel';
import TaskGroup from './TaskGroup';

function TaskList() {
  const { taskGroupList, groupListSearch, taskGroupCompleteCount } =
    useContext(TodoContext);
  const showTaskGroup = groupListSearch?.length > 0 ? groupListSearch : taskGroupList
  const totalGroupTask = showTaskGroup?.length || 0;
  return (
    <>
      <div className="w-[736px] flex flex-col justify-between mx-auto">
        <CountLabel
          label="Task created"
          value={`${taskGroupCompleteCount} of ${totalGroupTask}`}
        />
        <div className="my-6 max-w-[736px]">
          {showTaskGroup.length > 0 ? (
            showTaskGroup.map((taskGroup, index) => (
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
