import React from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Cards = ({ data }) => {

  const handleDelete = async (e) => {
    // 1. Stop the click from bubbling up (prevents navigation if inside a link)
    e.preventDefault();
    e.stopPropagation();

    // 2. Optional: Confirm before deleting
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      // 3. Call the backend API
      // Adjust '_id' if your database uses 'id' instead
      const response = await axios.delete(`http://localhost:3000/deleted/${data._id}`);
      
      console.log("Deleted:", response.data);

      // 4. Refresh the page to show the updated list
      // (Alternatively, you could pass a refresh function from the parent)
      window.location.reload(); 

    } catch (error) {
      console.error("Error deleting note:", error);
      alert("Failed to delete note");
    }
  };

  return (
    <div className="group relative w-80 h-52 bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-2 overflow-hidden">
      
      {/* --- DELETE BUTTON --- */}
      <button 
        onClick={handleDelete}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 text-white/70 hover:bg-red-500 hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
        title="Delete Note"
      >
        <MdDeleteForever size={22} />
      </button>

      {/* --- CONTENT SECTION --- */}
      <div className="flex flex-col h-full justify-between pointer-events-none"> 
        {/* pointer-events-none on container ensures clicks go to buttons, not div */}
        
        <div className='pr-10 pointer-events-auto'> 
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">
            Note Entry
          </span>
          <h2 className="text-2xl font-bold text-white mt-1 line-clamp-2 leading-tight">
            {data.title || "Untitled Note"}
          </h2>
        </div>

        {/* --- VIEW BUTTON --- */}
        <div className="flex items-center pointer-events-auto">
          <NavLink
            to="/View"
            state={{ noteData: data }}
            className="group/btn flex items-center justify-center gap-2 bg-white text-black px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-black hover:text-white shadow-lg"
          >
            View Details
            <IoMdArrowRoundForward className="transition-transform group-hover/btn:translate-x-1" />
          </NavLink>
        </div>
      </div>

      {/* Decorative Gradient Glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full group-hover:bg-purple-500/40 transition-all duration-700 pointer-events-none" />
    </div>
  );
};

export default Cards;