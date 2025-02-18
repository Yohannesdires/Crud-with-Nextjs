import Link from 'next/link'
import React from 'react'
import { FaPlus } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
        <Link href={"/"} className='text-white font-bold '>My Coding</Link>
        <Link href={"/addTopic"} className='bg-white text-green-600 p-2 flex flex-row items-center justify-between gap-3'><p>Add Topic</p> <FaPlus className=' size-4'/> </Link>
    </nav>
  )
}

export default Navbar