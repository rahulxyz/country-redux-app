import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export interface ITodo {
    id: string;
    task: string;
}

const Todo = () => {
    const [todolist, setTodoList] = useState<ITodo[]>([]);

    const handleAdd = (item: ITodo)=>{
        setTodoList([
            ...todolist,
            item
        ])
    }

    return ( 
        <div>
            <AddTodo addTodo={handleAdd}/>
            <TodoList todolist={todolist} />
        </div>
     );
}
 
export default Todo;