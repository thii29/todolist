import { useContext } from 'react';

import TaskItem from './TaskItem';
import { TodoContext } from '../../contexts/TodoContext';

function TaskList() {
  // Ở component cha cần bao provider mới lấy đc dữ liệu cung cấp
  /* TodoContext.Provider
     sài được toàn bộ dữ liệu
     trong cái value này =>>>>>> value= {{
        todos: toDos, <<<<<<<
        handleRemoveTodo: () => {},
        handleTodoCheck: () => {},
      }} */
  // Sau đó bỏ props và lấy toàn bộ từ use context
  const todoObjectProvider = useContext(TodoContext);

  console.log('todoObjectProvider', todoObjectProvider);

  const { todos } = todoObjectProvider;

  const todoListLength = todos?.length || 0;
  const totalTrue = todos.reduce((result, item) => {
    if (item.checked) {
      return result + 1;
    }
    return result;
  }, 0);

  return (
    <div>
      <div className="w-[736px] flex justify-between">
        <div className="flex gap-2 h-full">
          <span className="text-blue font-inter text-sm">Tasks created</span>
          <span className="text-custom-gray-200 text-sm font-inter rounded-xl bg-custom-gray-400 w-fit px-2">
            {todoListLength}
          </span>
        </div>
        <div className="flex gap-2 h-full">
          <span className="text-purple text-sm font-inter">Completed</span>
          <span className="text-custom-gray-200 text-sm font-inter rounded-xl bg-custom-gray-400 w-fit px-2">
            {totalTrue} of {todoListLength}
          </span>
        </div>
      </div>
      <div className="mt-6 max-w-[736px]">
        {todoListLength === 0 ? (
          <>Empty</>
        ) : (
          todos.map((todo) => <TaskItem key={todo.id} {...todo} />)
        )}
      </div>
    </div>
  );
}

export default TaskList;
