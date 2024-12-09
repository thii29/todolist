import { useState } from "react"
import Header from "../components/Header"
import TaskList from "../components/Task"
import { TodoType } from "../types"

const Home = () => {
  const [inputValue, setInputValue] = useState("")
  const [tasks, setTasks] = useState<TodoType[]>([])

  const onChangeValue = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(event.target.value)
  }
  const handleCreate = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const newTask = {
      id: new Date().getMilliseconds(),
      title: inputValue,
      status:false
    }
    setTasks([...tasks, newTask])
    setInputValue("")
  }
  return (
    <main className="relative">
        <Header inputValue={inputValue} handleCreate={handleCreate} onChangeValue={onChangeValue}/>
        <section className="mt-16 absolute left-1/2 -translate-x-1/2">
          <TaskList tasks={tasks} />
        </section>
      </main>
  )
}

export default Home