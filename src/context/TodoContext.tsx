import { createContext } from "react";
import { TodoType } from "../types";

type TodoContextType = {
    inputValue: string,
    tasks: TodoType[],
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>)=>void,
    handleCheck: (idTask:number)=> void
};

const defaultValue: TodoContextType = {
    inputValue: "",
    tasks: [],
    onChangeInput: ()=>{},
    handleCheck: ()=>{},
}

export const TodoContext = createContext(defaultValue);
