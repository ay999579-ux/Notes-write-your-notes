import React, { useState } from 'react';
import Nav from '../component/Nav'; // Assuming this path is correct
import { FaPenFancy } from "react-icons/fa";
import axios from 'axios';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Add = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 1. Logic to handle the 10-word wrap
  const handleContentChange = (e) => {
    let val = e.target.value;

    // Check if the last character typed is a space
    if (val.endsWith(' ')) {
      const words = val.trim().split(/\s+/);
      
      // If word count is a multiple of 10, add a new line
      if (words.length > 0 && words.length % 10 === 0) {
        // Prevent double newlines if user backspaces
        if (val.slice(-2) !== '\n ') {
           val = val.trim() + '\n';
        }
      }
    }
    setContent(val);
  };

  // 2. Function to send data to backend
  async function creates() {
    try {
      const creat = await axios.post('http://localhost:3000/created', {
        title: title,
        content: content
      });
      console.log('Response:', creat.data);
      
      // Optional: Clear form after success
      setTitle('');
      setContent('');
      alert('Note Created!'); 
      
    } catch (error) {
      console.log(error, ' error from creates route');
    }
  }

  // 3. Form Submit Handler
  function handal(e) {
    e.preventDefault();
    console.log("Submitting:", { title, content });
    creates();
  }

  return (
    <div className='bg-[conic-gradient(from_405deg,black,rgb(97,91,183),rgb(176,194,236))] h-screen w-full overflow-hidden'>
      
      <Nav text='create notes' src={<FaPenFancy />} />
      
      <div className='flex items-center justify-center h-[90%] w-full pb-10'>
        
        {/* Added onSubmit to form */}
        <form 
          onSubmit={handal}
          className='bg-gray-500/30 backdrop-blur-3xl border border-white w-1/2 rounded-[3rem] p-10 flex flex-col gap-6 relative shadow-2xl h-[85%]'
        >

          {/* Title Section */}
          <div className='w-full flex flex-col gap-2'>
            <h1 className='text-white text-xl ml-2 font-semibold'>Title</h1>
            <input
              className='bg-white w-full rounded-xl h-12 p-5 outline-none focus:ring-2 focus:ring-blue-400 text-black'
              type="text"
              placeholder='Enter title...' 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Content Section */}
          <div className='w-full flex flex-col gap-2 flex-grow'>
            <h1 className='text-white text-xl ml-2 font-semibold'>Content</h1>
            
            {/* CHANGED TO TEXTAREA for multi-line support */}
            <textarea
              className='w-full h-full bg-white rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-400 text-black resize-none'
              placeholder='Start typing...' 
              value={content}
              onChange={handleContentChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className='bg-white w-32 h-12 rounded-2xl self-end mt-2 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-200 active:scale-95 transition-all'
          >
            Submit 
            <div className='text-green-700 text-lg'>
              <MdKeyboardDoubleArrowUp />
            </div>
          </button>

        </form>
      </div>
    </div>
  );
}

export default Add;