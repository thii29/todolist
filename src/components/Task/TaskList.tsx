import { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import CountLabel from '../Common/CountLabel';
import TaskGroup from './TaskGroup';

function TaskList() {
  const { taskGroupList, taskGroupListSearch, taskGroupCompletedCount } =
    useContext(TaskContext);

  const renderGroupedList =
    taskGroupListSearch?.length > 0 ? taskGroupListSearch : taskGroupList;

  const totalGroupTask = renderGroupedList?.length || 0;

  return (
    <>
      <div className="w-[736px] flex justify-between mx-auto">
        <CountLabel
          label={'Tasks created'.toUpperCase()}
          labelClassName="font-bold"
          value={totalGroupTask}
        />
        {/* Sau khi toàn bộ task item trong 1 group hoàn thành thì mới tăng lên 1 */}
        <CountLabel
          label="Task group completed"
          value={`${taskGroupCompletedCount} of ${totalGroupTask}`}
        />
      </div>
      <div className="py-6 max-w-[736px] mx-auto">
        {renderGroupedList.map((taskGroup, index) => (
          <TaskGroup key={index} taskGroup={taskGroup} />
        ))}
      </div>
    </>
  );
}

export default TaskList;
