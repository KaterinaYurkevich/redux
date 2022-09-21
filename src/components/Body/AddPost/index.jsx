import React from 'react';

export function AddPost({ titleValue, textValue, updateTitle, updateText, handleAction }) {

  return (
      <div className='d-flex flex-col justify-start justify-items-end'>
          <input className="p-2 border-2 rounded hover: outline-teal-600 w-60" type="text" placeholder="Add Title off News" value={titleValue}
            onChange={(e) => updateTitle(e.target.value)} />
          <textarea className="p-2 border-2 rounded hover: outline-teal-600 w-60" cols="30" rows="10" placeholder="Add News" value={textValue}
            onChange={(e) => updateText(e.target.value)} />
          <button className="flex-no-shrink p-2 border-2 rounded text-white bg-teal-600 border-teal-600 hover:text-teal-600 hover:bg-transparent"
            onClick={handleAction}>Add News</button>
      </div>
  )
}