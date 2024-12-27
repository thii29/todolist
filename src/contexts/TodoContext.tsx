import { createContext } from 'react';
import { TodoGroupType } from '../types';

type TodoContextType = {
  taskGroupList: TodoGroupType[];
  inputCreateGroup: string;
  setInputCreateGroup: React.Dispatch<React.SetStateAction<string>>;
  handleCreateGroup: () => void;
  handleAddItem: (
    groupID: number,
    inputTaskItem: string,
    onSuccess?: () => void
  ) => void;
  checkTaskItem: (groupID: number, taskId: number) => void;
};

const todoContextDefaultValue: TodoContextType = {
  taskGroupList: [],
  inputCreateGroup: '',
  setInputCreateGroup: () => {},
  handleCreateGroup: () => {},
  handleAddItem: () => {},
  checkTaskItem: () => {},
};

export const TodoContext = createContext(todoContextDefaultValue);
