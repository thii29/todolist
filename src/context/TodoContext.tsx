import { createContext } from "react";
import { TodoType } from "../types";

type TodoContextType = {
    inputValue: string,
    tasks: TodoType[],
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>)=>void,
    handleCheck: (idTask:number)=> void,
    handleRemove: (idTask:number)=> void
};

const defaultValue: TodoContextType = {
    inputValue: "",
    tasks: [],
    onChangeInput: ()=>{},
    handleCheck: ()=>{},
    handleRemove: ()=>{},
}

export const TodoContext = createContext(defaultValue);
