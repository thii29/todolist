import { createContext } from "react";
import { TodoType } from "../types";

//tao type
type TodoContextType = {
  tasks: TodoType[];
  inputValue: string;
  onChangeValue:  React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleCheck: (idTask: number) => void;
  handleRemove: (idTask: number) => void;
};

//tao value
const defaultValue: TodoContextType = {
  tasks: [],
  inputValue: "",
  onChangeValue: ()=>{},
  handleCheck: () => {},
  handleRemove: () => {},
};

//khoi tao context
//nhung cho can cung cap thi sd Provider

export const TodoContext = createContext(defaultValue);
