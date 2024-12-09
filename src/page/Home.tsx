import { useState } from "react";
import Header from "../components/Header";
import TaskList from "../components/Task";
import { TodoType } from "../types";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<TodoType[]>([]);

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleCreate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newTask = {
      id: new Date().getMilliseconds(),
      title: inputValue,
      status: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };
  const handleCheck = (idTask: number) => {
    const updateTaskStatus = tasks.map((item) => {
      if (item.id === idTask) {
        const newItem = { ...item, status: !item.status };
        return newItem;
      }
      return item;
    });
    setTasks(updateTaskStatus);
  };
  const handleRemove = (idTask:number)=>{
    const newTaskList = tasks.filter(item=>{
      return item.id!==idTask
    })
    setTasks(newTaskList)
  }
  return (
    <main className="w-full relative bg-custom-gray-600">
      <Header
        inputValue={inputValue}
        handleCreate={handleCreate}
        onChangeValue={onChangeValue}
      />
      <div className="w-full min-h-screen">
        <section className="w-[736px] mt-16 absolute left-1/2 -translate-x-1/2">
          <TaskList tasks={tasks} handleCheck={handleCheck} handleRemove={handleRemove}/>
        </section>
      </div>
    </main>
  );
};

export default Home;
