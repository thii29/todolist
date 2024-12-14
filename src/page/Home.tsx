import { useState } from "react";
import Header from "../components/Header";
import TaskList from "../components/Task";
import { TodoContext } from "../context/TodoContext";
import { TodoType } from "../types";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<TodoType[]>([]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setInputValue(e.target.value)
  }

  const handleAdd = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const newTask = {
      id: new Date().getMilliseconds(),
      title: inputValue,
      status: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };
  return (
    <TodoContext.Provider
      value={{
        inputValue,
        tasks,
        onChangeInput,
      }}
    >
      <main className="relative">
        <Header handleAdd={handleAdd} />
        <section className="mt-16 absolute left-1/2  -translate-x-1/2">
          <TaskList />
        </section>
      </main>
    </TodoContext.Provider>
  );
};

export default Home;
