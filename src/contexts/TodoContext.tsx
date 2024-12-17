import { createContext } from 'react';
import { TodoGroupType } from '../types';

type TodoContextType = {
  taskGroupList: TodoGroupType[];
  inputCreateGroup: string;
  setInputCreateGroup: React.Dispatch<React.SetStateAction<string>>;
  handleCreateGroup: () => void;
};

const todoContextDefaultValue: TodoContextType = {
  taskGroupList: [],
  inputCreateGroup: '',
  setInputCreateGroup: () => {},
  handleCreateGroup: () => {},
};

export const TodoContext = createContext(todoContextDefaultValue);
