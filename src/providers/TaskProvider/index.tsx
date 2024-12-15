import { PropsWithChildren, useState } from 'react';
import { TaskContext } from '../../contexts/TaskContext';
import { taskDataTest } from '../../dummy/TaskData';
import { SortTypeEnum, TaskGroupType, TaskItemType } from '../../Types/Task';

const TaskProvider = ({ children }: PropsWithChildren) => {
  const [taskGroupList, setTaskGroupList] =
    useState<TaskGroupType[]>(taskDataTest);
  const [taskGroupListSearch, setTaskGroupListSearch] = useState<
    TaskGroupType[]
  >([]);

  const [inputAddGroup, setInputAddGroup] = useState<string>('');

  const taskGroupCompletedCount = taskGroupList.reduce((result, value) => {
    const taskItemList = value.tasks;
    const isCount = taskItemList.every((taskItem) => taskItem.status === true);
    if (isCount && taskItemList.length > 0) {
      result++;
    }
    return result;
  }, 0);

  const addTaskGroup = () => {
    const newTaskGroup: TaskGroupType = {
      id: new Date().getMilliseconds(),
      title: inputAddGroup,
      tasks: [],
    };
    setTaskGroupList([...taskGroupList, newTaskGroup]);
    setInputAddGroup('');
  };

  const addTaskItem = (
    groupId: number,
    inputTaskItem: string,
    onSuccess?: () => void
  ) => {
    if (!inputTaskItem) {
      console.error('inputTaskItem must not be empty');
      return;
    }
    const newTaskItem: TaskItemType = {
      id: new Date().getMilliseconds(),
      title: inputTaskItem,
      status: false,
    };

    const newTaskGroupList = taskGroupList.map((taskGroup) => {
      if (taskGroup.id === groupId) {
        return { ...taskGroup, tasks: [...taskGroup.tasks, newTaskItem] };
      }
      return taskGroup;
    });
    setTaskGroupList(newTaskGroupList);
    onSuccess?.();
  };

  const checkTaskItem = (groupId: number, taskId: number) => {
    const newTaskGroupList = taskGroupList.map((taskGroup) => {
      if (taskGroup.id === groupId) {
        const newListTaskItemList = taskGroup.tasks.map((taskItem) => {
          if (taskItem.id === taskId) {
            return { ...taskItem, status: !taskItem.status };
          }
          return taskItem;
        });
        return { ...taskGroup, tasks: newListTaskItemList };
      }
      return taskGroup;
    });
    setTaskGroupList(newTaskGroupList);
  };

  const handleSearch = (value: string) => {
    const newTaskGroupListFilter = taskGroupList.filter((taskGroup) => {
      return taskGroup.title.toLowerCase().includes(value.toLowerCase());
    });

    setTaskGroupListSearch(newTaskGroupListFilter);
  };

  const handleSort = (type: SortTypeEnum) => {
    if (type === SortTypeEnum.ALL) {
      // Dùng lại list chính
      setTaskGroupListSearch([]);
    }

    if (type === SortTypeEnum.COMPLETED) {
      let newTaskGroupListFilter = [];
      // 1. Bóc những group có tasks length > 0 ra
      newTaskGroupListFilter = taskGroupList.filter((taskGroup) => {
        return taskGroup.tasks.length > 0;
      });
      // 2. Dùng để thay đổi mảng group
      newTaskGroupListFilter = newTaskGroupListFilter.map((taskGroup) => {
        // 3. Filter ra task có status là true
        const newListTaskItemFilter = taskGroup.tasks.filter((taskItem) => {
          return taskItem.status === true;
        });
        //4. update lại group item
        return { ...taskGroup, tasks: newListTaskItemFilter };
      });

      //5. set cho group list search
      setTaskGroupListSearch(newTaskGroupListFilter);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        taskGroupList,
        taskGroupListSearch,
        taskGroupCompletedCount,
        inputAddGroup,
        setInputAddGroup,
        addTaskGroup,
        addTaskItem,
        checkTaskItem,
        handleSearch,
        handleSort
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
