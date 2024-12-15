//1 tao type
//2 default
//3 khoi tao context

import { createContext } from 'react';
import { SortTypeEnum, TaskGroupType } from '../../Types/Task';

type TaskContextType = {
  taskGroupList: TaskGroupType[];
  taskGroupListSearch: TaskGroupType[];
  taskGroupCompletedCount?: number;
  inputAddGroup: string;
  setInputAddGroup: React.Dispatch<React.SetStateAction<string>>;
  addTaskGroup: () => void;
  addTaskItem: (
    groupId: number,
    inputTaskItem: string,
    onSuccess?: () => void
  ) => void;
  checkTaskItem: (groupId: number, taskId: number) => void;
  handleSearch: (value: string) => void;
  handleSort: (type: SortTypeEnum) => void;
};

const taskContextDefaultValue: TaskContextType = {
  taskGroupList: [],
  taskGroupListSearch: [],
  taskGroupCompletedCount: 0,
  inputAddGroup: '',
  setInputAddGroup: () => {},
  addTaskGroup: () => {},
  addTaskItem: () => {},
  checkTaskItem: () => {},
  handleSearch: () => {},
  handleSort: () => {},
};

export const TaskContext = createContext(taskContextDefaultValue);
