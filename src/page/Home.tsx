import { useState } from "react";
import Header from "../components/Header";
import TaskList from "../components/Task";
import { TodoType } from "../types";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<TodoType[]>([]);

  const onInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(e.target.value)
  }

  const handleCreate = () => {
    const newTask = {
      id: Math.floor(Math.random() * 10),
      title: inputValue,
      status: false,
    };
    setTasks([...tasks,newTask])
    setInputValue("")
  };
  return (
    <main className="relative">
      <Header inputValue={inputValue} handleCreate={handleCreate} onInputChange={onInputChange}/>
      <section className="mt-16 absolute left-1/2 -translate-x-1/2">
        <TaskList tasks={tasks}/>
      </section>
    </main>
  );
};

export default Home;
