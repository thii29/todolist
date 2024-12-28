import { PropsWithChildren, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { SortTypeEnum, TodoGroupType, TodoItemType } from '../types';

export default function TaskProvider({ children }: PropsWithChildren) {
  const [inputCreateGroup, setInputCreateGroup] = useState('');
  const [taskGroupList, setTaskGroupList] = useState<TodoGroupType[]>([]);
  const [groupListSearch, setGroupListSearch] = useState<TodoGroupType[]>([]);
  const handleCreateGroup = () => {
    const newTaskGroup: TodoGroupType = {
      idGroup: new Date().getMilliseconds(),
      name: inputCreateGroup,
      tasks: [],
    };
    setTaskGroupList([...taskGroupList, newTaskGroup]);
    setInputCreateGroup('');
  };

  const handleAddItem = (
    groupID: number,
    inputTaskItem: string,
    onSuccess?: () => void
  ) => {
    if (!inputTaskItem) {
      console.error('Input must not be empty');
      return;
    }
    const newTask: TodoItemType = {
      id: new Date().getMilliseconds(),
      title: inputTaskItem,
      status: false,
    };

    const newTaskGroupList = taskGroupList.map((taskGroup) => {
      if (taskGroup.idGroup === groupID) {
        return { ...taskGroup, tasks: [...taskGroup.tasks, newTask] };
      }
      return taskGroup;
    });
    setTaskGroupList(newTaskGroupList);
    onSuccess?.();
  };

  const handleDeleteItem = (idGroup: number, idTask: number) => {
    const newGroupList = taskGroupList.map((group) => {
      if (group.idGroup === idGroup) {
        const newTaskList = group.tasks.filter((task) => task.id !== idTask);
        return { ...group, tasks: newTaskList };
      }
      return group;
    });
    setTaskGroupList(newGroupList);
  };
  const checkTaskItem = (groupID: number, taskId: number) => {
    const newTaskGroupList = taskGroupList.map((taskGroup) => {
      if (groupID === taskGroup.idGroup) {
        const newTaskListItem = taskGroup.tasks.map((taskItem) => {
          if (taskId === taskItem.id) {
            return { ...taskItem, status: !taskItem.status };
          }
          return taskItem;
        });
        return { ...taskGroup, tasks: newTaskListItem };
      }
      return taskGroup;
    });
    setTaskGroupList(newTaskGroupList);
  };

  const handleDeleteGroup = (idGroup: number) => {
    const newGroupList = taskGroupList.filter((item) => {
      return item.idGroup !== idGroup;
    });
    setTaskGroupList(newGroupList);
  };

  const taskGroupCompleteCount = taskGroupList.reduce((result, item) => {
    const taskListItem = item.tasks;
    const isCount = taskListItem.every((element) => element.status === true);
    if (isCount && taskListItem.length > 0) {
      result++;
    }
    return result;
  }, 0);

  const handleSearch = (str: string) => {
    const searchGroupList = taskGroupList.filter((item) => {
      return item.name.toLowerCase().includes(str.toLowerCase());
    });
    setGroupListSearch(searchGroupList);
  };

  const handleSort = (type: SortTypeEnum) => {
    if (type === SortTypeEnum.ALL) {
      setGroupListSearch([]);
    }
    if (type === SortTypeEnum.COMPLETED) {
      let taskGroupFilter = [];

      taskGroupFilter = taskGroupList.filter((group) => {
        return group.tasks.length > 0;
      });

      taskGroupFilter = taskGroupFilter.map((taskGroup) => {
        const newItemList = taskGroup.tasks.filter((item) => {
          return item.status === true;
        });
        return { ...taskGroup, tasks: newItemList };
      });

      setGroupListSearch(taskGroupFilter);
    }
  };
  return (
    <TodoContext.Provider
      value={{
        taskGroupList,
        setTaskGroupList,
        inputCreateGroup,
        setInputCreateGroup,
        handleCreateGroup,
        handleAddItem,
        checkTaskItem,
        handleDeleteItem,
        handleDeleteGroup,
        taskGroupCompleteCount,
        groupListSearch,
        handleSearch,
        handleSort
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
