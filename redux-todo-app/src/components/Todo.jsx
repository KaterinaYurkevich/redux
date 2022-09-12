import React, { useState, useEffect } from 'react';
import Input from './Input';
import List from './List';
import Buttons from './Buttons';
import { useSelector } from "react-redux";

const Todo = () => {
    const todos = useSelector((state) => {
       return state.todos.todos
    });

    const [filtered, setFiltered] = useState(todos);

    useEffect( () => {
        setFiltered(todos)
    }, [todos]);
    
    function handleFilterTodo(status) {
        if (status === 'all') {
            setFiltered(todos)
        } else {
            let filteredTodos = todos.filter(todo => todo.completed === status);
            setFiltered(filteredTodos);
        }
    }

    return (
        <div className="my-0 mx-auto shadow-sm max-w-lg h-full bg-white relative">
         <h1 className="bg-indigo-400 m-0 text-white font-medium uppercase py-2.5 px-7 ">Мои списки дел</h1>
            <Input />
            <ul  className="m-0 p-0 list-none">
                {filtered.map(todo => <List key={todo.id} id={todo.id} num={todo.count} title={todo.text} completed={todo.completed}/>)}
            </ul>
            {todos.length === 0 && <p className='text-gray-400 py-0.5 px-2.5 text-xl'>У вас нет дел</p>}
            <Buttons filterTodo={handleFilterTodo} />
        </div>
    )
};

export default Todo;