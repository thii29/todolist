import { useState } from "react";
import Header from "../components/Header";
import TaskList from "../components/Task";
import { TodoType } from "../types";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<TodoType[]>([]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCreate = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const newTask = {
      id: new Date().getMilliseconds(),
      title: inputValue,
      status: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const handleCheck = (idTask: number) => {
    const updateStatusTask = tasks.map((item) => {
      if (item.id === idTask) {
        const newItem = { ...item, status: !item.status };
        return newItem;
      }
      return item;
    });
    setTasks(updateStatusTask);
  };

  const handleRemove = (idTask: number) => {
    const oldTasks = tasks.filter((item) => {
      return item.id !== idTask;
    });
    setTasks(oldTasks);
  };
  return (
    <main className="relative">
      <Header
        inputValue={inputValue}
        handleCreate={handleCreate}
        onInputChange={onInputChange}
      />
      <section className="mt-16 absolute left-1/2 -translate-x-1/2">
        <TaskList tasks={tasks} handleRemove={handleRemove} handleCheck={handleCheck}/>
      </section>
    </main>
  );
};

export default Home;
