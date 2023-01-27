import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todos } from './model/model';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todos[]>([])


  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), activity: todo, isDone: false }])
      setTodo("")
    }
  }

  console.log(todos)
  return (
    <>
      <div className='App'>
        <span className='heading'>Tasktify </span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;