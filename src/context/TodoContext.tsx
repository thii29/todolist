import { createContext } from "react";
import { TodoType } from "../types";

type TodoContextType = {
    inputValue: string,
    tasks: TodoType[],
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>)=>void 
};

const defaultValue: TodoContextType = {
    inputValue: "",
    tasks: [],
    onChangeInput: ()=>{}
}

export const TodoContext = createContext(defaultValue);
