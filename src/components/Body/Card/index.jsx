import React from 'react';
import { useDispatch } from 'react-redux';
import { changeNews, deleteNews } from '../../../store/features/postSlice';

export function Card({ data }) {
  const dispatch = useDispatch();
  
  return (
    <div className="bg-rose-50 max-w-xs my-2.5 h-96 d-flex flex-col items-stretch">
      <div className="bg-violet-100 p-2 h-20">{data.title}</div>
      <div className="p-2 d-flex flex-auto flex-col grow justify-between items-stretch">
        <p className="flex-auto">{data.body}</p>
        <a className="cursor-pointer">Read more</a>
      </div>
      <div className="bg-violet-100 py-1 h-12 d-flex content-center px-5 justify-between">
        <button className="flex-no-shrink p-1.5 border-2 rounded text-white bg-teal-600 border-teal-600 hover:text-teal-600 hover:bg-transparent mx-2" onClick={() => dispatch(changeNews(data.id))}>Change</button>
        <button className="flex-no-shrink p-1.5 border-2 rounded text-white bg-teal-600 border-teal-600 hover:text-teal-600 hover:bg-transparent mx-2" onClick={() => dispatch(deleteNews(data.id))}>Delete</button>
      </div>
    </div>
  )
}
