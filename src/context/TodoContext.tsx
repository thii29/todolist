
import { createContext } from 'react'
import { TodoType } from '../types'

type TodoContextType = {
    tasks: TodoType[];
    handleCheck: (idTask: number)=>void,
    handleRemove: (idTask: number)=>void
}
 
const defaultValue: TodoContextType = {
    tasks: [],
    handleCheck: ()=>{},
    handleRemove: () => {}
}

export  const TodoContext = createContext(defaultValue)

