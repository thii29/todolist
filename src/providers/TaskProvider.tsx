import { PropsWithChildren, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoGroupType } from '../types';

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
  return (
    <TodoContext.Provider
      value={{ taskGroupList, inputCreateGroup, setInputCreateGroup, handleCreateGroup }}
    >
      {children}
    </TodoContext.Provider>
  );
}
