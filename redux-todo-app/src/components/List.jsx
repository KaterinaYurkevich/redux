import React from 'react';
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from '../redux/features/todoSlice';

const List = (props) => {
    const { title, id, completed, num } = props;
    const dispatch = useDispatch();

    const deleteTodo = () => {
		dispatch(removeTodo({id}))
	}

    const activateTodo = () => {
		dispatch(toggleComplete({id}))
	}

    return (
        <li className='bg-indigo-50 h-14 text-xl cursor-pointer p-1.5 flex justify-between items-center even:bg-indigo-100 hover:ml-1 hover:opacity-100'>
            <span className={completed ? 'text-gray-400 line-through' : ''} onClick={() => activateTodo()} >{num}. {title}</span>
            <button className="todos_button" onClick={() => deleteTodo()}>Удалить</button>
        </li>
    )
};

export default List;
