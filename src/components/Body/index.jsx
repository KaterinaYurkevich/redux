import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from './Card';
import { AddPost } from './AddPost';
import { addNewPost, fetchPosts } from '../../store/features/postSlice';

export function Body({ titleValue, textValue, updateTitle, updateText, handleAction }) {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleAddPost = () => {
    dispatch(addNewPost(title, text));
    setText('');
    setTitle('');
  }

  return (
    <div className='bg-emerald-50 text-emerald-900'>
      <div className='max-w-[90%] m-auto py-2 d-flex justify-between px-0'>
        <div className='d-flex flex-wrap justify-between max-w-[70%] gap-2'>
        {posts.map(post => <Card key={post.id} data={post} />)}
        </div>
        <div className='max-w-[30%]'>
          <AddPost titleValue={title} textValue={text} updateTitle={setTitle} updateText={setText} handleAction={handleAddPost}/>
        </div>
      </div>
    </div>
  )
}
