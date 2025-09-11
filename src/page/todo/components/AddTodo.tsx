import * as React from "react";
import type { ITodo } from "../Todo";
import { v4 as uuidv4 } from "uuid";

interface IAddTodo {
  addTodo: (item: ITodo)=>void;
}

const AddTodo = ({ addTodo }: IAddTodo) => {
  const [todo, setTodo] = React.useState<string>("");

  const handleAdd = () => {
    addTodo({
      id: uuidv4(),
      task: todo,
    });
    setTodo("")
  };

  return (
    <>
      <input
        type="text"
        value={todo}
        placeholder="Enter Task"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default AddTodo;
