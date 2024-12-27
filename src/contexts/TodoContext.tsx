import { createContext } from 'react';
import { TodoGroupType } from '../types';

type TodoContextType = {
  taskGroupList: TodoGroupType[];
  setTaskGroupList: React.Dispatch<React.SetStateAction<TodoGroupType[]>>;
  inputCreateGroup: string;
  setInputCreateGroup: React.Dispatch<React.SetStateAction<string>>;
  handleCreateGroup: () => void;
  handleAddItem: (
    groupID: number,
    inputTaskItem: string,
    onSuccess?: () => void
  ) => void;
  checkTaskItem: (groupID: number, taskId: number) => void;
  handleDeleteItem: (idGroup: number, idTask: number)=>void
};

const todoContextDefaultValue: TodoContextType = {
  taskGroupList: [],
  setTaskGroupList: ()=>{},
  inputCreateGroup: '',
  setInputCreateGroup: () => {},
  handleCreateGroup: () => {},
  handleAddItem: () => {},
  checkTaskItem: () => {},
  handleDeleteItem: ()=>void
};

export const TodoContext = createContext(todoContextDefaultValue);
