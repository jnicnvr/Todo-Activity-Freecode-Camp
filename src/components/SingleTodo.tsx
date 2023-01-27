import React, { useEffect, useRef, useState } from 'react'
import { Todos } from '../model/model'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './SingleTodo.css'
import { isDocument } from '@testing-library/user-event/dist/utils'
import TodoList from './TodoList'

type Props = {
    todo: Todos;
    todos: Todos[];
    setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;

}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState(todo.activity)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, activity: editTodo } : todo
        ))
        setEdit(false)
    }
    return (
        <form key={todo.id} className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>

            {
                edit ? (
                    <input
                        ref={inputRef}
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                        className='todos__single--text' />
                ) : (
                    todo.isDone ? (
                        <s className='todos__single--text'>{todo.activity}</s>
                    ) : (
                        <span className='todos__single--text'>{todo.activity}</span>
                    )
                )
            }
            <span className="icon"><AiFillEdit onClick={() => { if (!edit && !todo.isDone) { setEdit(!edit) } }} /></span>
            <span className="icon"><AiFillDelete onClick={() => handleDelete(todo.id)} /></span>
            <span className="icon"><MdDone onClick={() => handleDone(todo.id)} /></span>
        </form >
    )
}

export default SingleTodo