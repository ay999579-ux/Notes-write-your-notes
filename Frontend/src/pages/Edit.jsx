import React, { useState } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { FaSave } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // 1. Import Close Icon

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Safety Check
  if (!location.state || !location.state.noteData) {
    return <Navigate to="/" replace />;
  }

  const existingNote = location.state.noteData;
  const [title, setTitle] = useState(existingNote.title);
  const [content, setContent] = useState(existingNote.content);

  const handleContentChange = (e) => {
    let val = e.target.value;
    if (val.endsWith(' ')) {
      const words = val.trim().split(/\s+/);
      if (words.length > 0 && words.length % 10 === 0) {
        if (val.slice(-2) !== '\n ') {
           val = val.trim() + '\n';
        }
      }
    }
    setContent(val);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/updated/${existingNote._id}`, {
        title: title,
        content: content
      });
      console.log("Update Success:", response.data);
      navigate('/'); 
    } catch (error) {
      console.error("Error updating note:", error);
      alert("Failed to update note");
    }
  };

  // 2. Handle Cancel Action
  const handleCancel = () => {
    navigate('/'); // Redirect to Home
  };

  return (
    <div className='bg-[conic-gradient(from_405deg,black,rgb(97,91,183),rgb(176,194,236))] h-screen w-full overflow-hidden'>
      
      <div className='flex items-center justify-center h-full w-full pb-10'>
        <form 
          onSubmit={handleUpdate}
          className='bg-gray-500/30 backdrop-blur-3xl border border-white w-1/2 rounded-[3rem] p-10 flex flex-col gap-6 relative shadow-2xl h-[85%]'
        >

          {/* --- CANCEL BUTTON (Top Right) --- */}
          <button 
            type="button" // Important: type="button" prevents form submission
            onClick={handleCancel}
            className="absolute top-8 right-8 text-white/50 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300"
            title="Cancel & Go Home"
          >
            <IoClose size={28} />
          </button>
          {/* ---------------------------------- */}

          {/* Title Input */}
          <div className='w-full flex flex-col gap-2 mt-4'> 
            <h1 className='text-white text-xl ml-2 font-semibold'>Edit Title</h1>
            <input
              className='bg-white w-full rounded-xl h-12 p-5 outline-none focus:ring-2 focus:ring-blue-400 text-black'
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Content Input */}
          <div className='w-full flex flex-col gap-2 flex-grow'>
            <h1 className='text-white text-xl ml-2 font-semibold'>Edit Content</h1>
            <textarea
              className='w-full h-full bg-white rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-400 text-black resize-none'
              value={content}
              onChange={handleContentChange}
            />
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className='bg-white w-40 h-12 rounded-2xl self-end mt-2 flex items-center justify-center gap-2 cursor-pointer hover:bg-green-500 hover:text-white transition-all active:scale-95 shadow-lg'
          >
            Update Note
            <FaSave className="text-lg" />
          </button>

        </form>
      </div>
    </div>
  );
};

export default Edit;