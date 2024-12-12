import { createContext } from 'react';
import { ToDoType } from '../../Types/Todo';

// Bước khởi tạo type - 1
type toDoContextType = {
  todos: ToDoType[];
  handleRemoveTodo: (id: number) => void;
  handleTodoCheck: (id: number) => void;
};

// khởi tạo default value - 2
const defaultValue: toDoContextType = {
  todos: [],
  handleRemoveTodo: () => {},
  handleTodoCheck: () => {},
};

// khởi tạo context
// Rồi kiếm chỗ muốn cung cấp cho toàn bộ component con thì sử dụng TodoContext.Provider
export const TodoContext = createContext(defaultValue);
