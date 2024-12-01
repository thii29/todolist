import { useState } from 'react';
import Header from '../../components/Header';
import TaskList from '../../components/Tasks';
import { ToDoType } from '../../Types/Todo';

function TodoList() {
  const [toDos, setTodos] = useState<ToDoType[]>([
    {
      id: 1,
      title: 'Learn React',
      checked: false,
    },
    {
      id: 2,
      title: 'Learn Typescript',
      checked: true,
    },
    {
      id: 3,
      title: 'Learn TailwindCSS',
      checked: false,
    },
  ]);

  const [inputAddValue, setInputAddValue] = useState('');
  const onInputAddChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputAddValue(event.target.value);
  };

  const handleCreateTodo = () => {
    setInputAddValue('');
    const newTodo: ToDoType = {
      id: new Date().getTime(),
      title: inputAddValue,
      checked: false,
    };
    setTodos([...toDos, newTodo]);
  };

  const handleRemoveTodo = (id: number) => {
    const newTodosArr = [];

    for (let i = 0; i < toDos.length; i++) {
      const todo = toDos[i];
      if (todo.id === id) {
        continue;
      }
      newTodosArr.push(todo);
    }

    setTodos(newTodosArr);
  };

  const handleTodoCheck = (idParam: number) => {
    const newTodosArr = toDos.map((todo) => {
      if (todo.id === idParam) {
        return {
          ...todo,
          checked: !todo.checked,
        };
      }
      return todo;
    });
    console.log('newTodosArr', newTodosArr);
    setTodos(newTodosArr);
  };
  return (
    <main className="relative">
      <Header
        inputAddValue={inputAddValue}
        onInputAddChange={onInputAddChange}
        handleCreateTodo={handleCreateTodo}
      />
      <section className="mt-16 absolute left-1/2  -translate-x-1/2">
        <TaskList
          toDos={toDos}
          handleRemoveTodo={handleRemoveTodo}
          handleTodoCheck={handleTodoCheck}
        />
      </section>
    </main>
  );
}

export default TodoList;
