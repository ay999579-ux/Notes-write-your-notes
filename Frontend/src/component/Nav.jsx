import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiDocumentAdd, HiOutlineHome } from "react-icons/hi"; // Added HiOutlineHome

const Nav = (props) => {

    // Refined Style: Active link becomes a bright "pill", inactive is subtle white
    const linkStyle = ({ isActive }) => 
        isActive 
        ? "px-4 py-1.5 text-sm font-bold bg-white text-black rounded-full transition-all duration-300 shadow-lg shadow-white/10" 
        : "px-4 py-1.5 text-sm font-medium text-white/50 hover:text-white transition-all duration-300";

  return (
    /* Changed text-gray-950 to text-white to match the new dark professional background */
    <div className='flex items-center justify-between mx-10 md:mx-20 h-24 pt-1'>
         <h1 className='flex items-center justify-center gap-2 font-bold text-white text-2xl tracking-tighter'>
            <span className='text-purple-500'>{props.src}</span>
            {props.text}
         </h1>

        <div className='flex items-center p-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl'>
            <NavLink to={'/'} className={linkStyle}>
                <div className='flex items-center gap-2'>
                    <HiOutlineHome size={18} /> 
                    Home
                </div>
            </NavLink>
            
            <div className='w-1 h-4 bg-white/10 mx-1'></div>
            
            <NavLink to={'/Add'} className={linkStyle}>
                <div className='flex items-center gap-2'>
                    <HiDocumentAdd size={18} /> 
                    New Note
                </div>
            </NavLink>
        </div>
    </div>
  )
}

export default Nav