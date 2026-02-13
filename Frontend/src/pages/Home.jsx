import React, { useEffect, useState } from 'react'
import { LuNotebookPen } from "react-icons/lu";
import Nav from '../component/Nav'
import Cards from '../component/Cards';
import axios from 'axios'

const Home = () => {

    const [note, setNote] = useState('')

    async function data() {
        const res = await axios.get(' http://localhost:3000/')
        console.log(res.data.User)
        setNote(res.data.User)
    }

    useEffect(() => {
        data()
    }, [])


    return (
        <div className='bg-[conic-gradient(from_405deg,black,rgb(97,91,183),rgb(176,194,236))] h-screen w-full '>
            <Nav text='Notes' src={<LuNotebookPen />} />
            <div className=' mx-4 md:mx-10 p-8 flex flex-wrap items-center justify-center gap-6 md:gap-10 rounded-xl 
     max-h-170 overflow-y-auto custom-scrollbar'>

               {
                note && note.map((item, index)=>{
                   return <Cards key={item._id || index} data={item}/>
                })
               }
    
            </div>
        </div>
    )
}

export default Home