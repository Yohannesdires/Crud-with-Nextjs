import React from "react";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";


const getTopics = async () => {
  try {
    const response =  await fetch("http://localhost:3000/api/topics", { cache: "no-store"});
    
    if (!response.ok) {
      throw new Error("Failed to fetch topics!");
    }
    return response.json();
  } catch (error) {
    console.error("Error when fetching topics!", error);
  }
}

const TopicsList = async () => {

 const { topics } = await getTopics();

  return (
    <>
    {
    topics.map((topic) => (
      <div className="p-4 border border-slate-300 my-3 flex justify-between items-start gap-5">
      <div>
        <h2 className="font-bold text-2xl ">{topic.title}</h2>
        <p>{topic.description}</p>
      </div>

      <div className="flex gap-2">
        <RemoveBtn id={topic._id} />
        <Link href={`/editTopic/${topic._id}`} >
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
    ))
    }
    
    </>
  );
};

export default TopicsList;
