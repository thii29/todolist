import { PropsWithChildren, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoGroupType, TodoItemType } from '../types';

export default function TaskProvider({ children }: PropsWithChildren) {
  const [inputCreateGroup, setInputCreateGroup] = useState('');
  const [taskGroupList, setTaskGroupList] = useState<TodoGroupType[]>([]);

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
        handleDeleteItem
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
