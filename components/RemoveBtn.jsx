'use client'
import React from 'react'
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from 'next/navigation'


const RemoveBtn = ({id}) => {
 const router = useRouter();
  const removeTopic = async () => {
  const confirmed = confirm("Are you sure you want to delete this topic?");
  if (confirmed) {
  const response =  await fetch(`http://localhost:3000/api/topics/${id}`, {
      method: "DELETE",
      cache: "no-store",
    });

    if(response.ok) {
      router.refresh();
    }
  }
}
  return (
   <button onClick={removeTopic} className='text-red-400'>
    <HiOutlineTrash size={24} />
   </button>
  )
}

export default RemoveBtn;