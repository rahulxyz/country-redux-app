import type { ITodo } from "../Todo";

interface ITodoList {
  todolist: ITodo[];
}
const TodoList = ({ todolist }: ITodoList) => {
  if (todolist.length == 0) {
    return "Data not found";
  }
  return (
    <ul>
      {todolist.map((e) => (
        <li key={e.id}>{e.task}</li>
      ))}
    </ul>
  );
};

export default TodoList;
