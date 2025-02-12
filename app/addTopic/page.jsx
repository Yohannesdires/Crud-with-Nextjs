"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AddTopic = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        router.push("/");
        console.log(title + " " + description);
        console.log("Topic added successfully");
        setTitle("");
        setDescription("");
      } else {
        throw new Error("Failed to add topic");
      }
    } catch (error) {
      console.error("Failed to add topic", error);
    }
  };
  return (
    <form className="flex flex-col gap-3" method="POST" onSubmit={handleSubmit}>
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
