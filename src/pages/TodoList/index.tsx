import { useState } from "react";
import Header from "../../components/Header";
import TaskList from "../../components/Tasks";
import { TodoType } from "../../Types/Todo";

export default function TodoList() {
  const [tasks, setTasks] = useState<TodoType[]>([]);
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event?.target.value);
  };
  const handleCreateTask= (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 100),
      title: inputValue,
      status: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };
  return (
    <main className="relative">
      <Header
        inputValue={inputValue}
        onInputChange={onInputChange}
        handleCreateTask={handleCreateTask}
      />
      <section className="mt-16 absolute left-1/2  -translate-x-1/2">
        <TaskList tasks={tasks} setTasks = {setTasks}/>
      </section>
    </main>
  );
}
