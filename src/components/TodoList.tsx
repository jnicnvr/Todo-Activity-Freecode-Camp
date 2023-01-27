import React from 'react'
import { Todos } from '../model/model'
import SingleTodo from './SingleTodo';
import './TodoList.css'
interface Todo {
    todos: Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const TodoList: React.FC<Todo> = ({ todos, setTodos }) => {
    return (
        <div className='todos'>
            {todos.map((t) => {
                return <SingleTodo key={t.id} todo={t} todos={todos} setTodos={setTodos} />
            })}
        </div>
    )
}

export default TodoList