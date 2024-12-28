import { createContext } from 'react';
import { SortTypeEnum, TodoGroupType } from '../types';

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
  handleDeleteItem: (idGroup: number, idTask: number) => void;
  handleDeleteGroup: (idGroup: number) => void;
  taskGroupCompleteCount: number;
  groupListSearch: TodoGroupType[];
  handleSearch: (str: string) => void;
  handleSort: (type: SortTypeEnum)=>void;
};

const todoContextDefaultValue: TodoContextType = {
  taskGroupList: [],
  setTaskGroupList: () => {},
  inputCreateGroup: '',
  setInputCreateGroup: () => {},
  handleCreateGroup: () => {},
  handleAddItem: () => {},
  checkTaskItem: () => {},
  handleDeleteItem: () => {},
  handleDeleteGroup: () => {},
  taskGroupCompleteCount: 0,
  groupListSearch: [],
  handleSearch: () => {},
  handleSort: ()=>{}
};

export const TodoContext = createContext(todoContextDefaultValue);
