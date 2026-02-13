import React from 'react'
import { NavLink, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { FaPen } from "react-icons/fa"; // Import Pen icon

const View = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Hook for navigation

    // Safety Check: Redirect if no data
    if (!location.state || !location.state.noteData) {
        return <Navigate to="/" replace />;
    }

    const note = location.state.noteData;

    // Handle Navigation to Edit Page
    const handleEdit = () => {
        navigate('/edit', { state: { noteData: note } });
    };

    return (
        <div className='bg-[conic-gradient(from_405deg,black,rgb(97,91,183),rgb(176,194,236))] h-screen w-full flex items-center justify-center p-4'>
            
            <div className='relative w-full max-w-3xl h-[80vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 shadow-2xl flex flex-col'>
                
                {/* Header */}
                <div className='flex justify-between items-start border-b border-white/20 pb-4 mb-4 shrink-0'>
                    <div className='flex flex-col gap-1 w-[85%]'>
                        <span className='text-gray-700 text-xs font-bold uppercase tracking-widest'>Title</span>
                        <h1 className='text-3xl font-bold text-white break-words leading-tight'>{note.title}</h1>
                    </div>
                    
                    {/* Close Button */}
                    <NavLink to={'/'} className="text-white/50 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-300 text-xl">
                        ✕
                    </NavLink>
                </div>

                {/* Content */}
                <div className='flex-grow overflow-y-auto pr-2 custom-scrollbar'>
                    <span className='text-gray-700 text-xs font-bold uppercase tracking-widest sticky top-0'>Content</span>
                    <p className='text-white/90 text-lg mt-2 leading-relaxed whitespace-pre-wrap break-words font-light'>
                        {note.content}
                    </p>
                </div>

                {/* Footer / Action Area */}
                <div className='mt-6 pt-4 border-t border-white/10 flex justify-end items-center gap-4 shrink-0'>
                    <span className='text-gray-950 text-xs mr-auto'>Created on: {new Date().toLocaleDateString()}</span>
                    
                    {/* EDIT BUTTON */} 
                    <button 
                        onClick={handleEdit}
                        className='group bg-white text-black px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 active:scale-95'
                    >
                        <span>Edit Note</span>
                        <FaPen className="text-sm group-hover:rotate-12 transition-transform" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default View