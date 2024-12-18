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

    const newTaskGroupList = taskGroupList.map(taskGroup=>{
      if(taskGroup.idGroup===groupID){
        return {...taskGroup, tasks: [...taskGroup.tasks, newTask]}
      }
      return taskGroup
    });
    setTaskGroupList(newTaskGroupList);
    onSuccess?.()
  };
  return (
    <TodoContext.Provider
      value={{
        taskGroupList,
        inputCreateGroup,
        setInputCreateGroup,
        handleCreateGroup,
        handleAddItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
