import { ToDoType } from '../../Types/Todo';
import TaskItem from './TaskItem';

function TaskList({
  toDos,
  handleRemoveTodo,
  handleTodoCheck,
}: {
  toDos: ToDoType[];
  handleRemoveTodo: (id: number) => void;
  handleTodoCheck: (id: number) => void;
}) {
  const todoListLength = toDos?.length || 0;
  const totalTrue = toDos.reduce((result, item) => {
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
          toDos.map((todo) => (
            <TaskItem
              key={todo.id}
              handleRemoveTodo={handleRemoveTodo}
              handleTodoCheck={handleTodoCheck}
              {...todo}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
