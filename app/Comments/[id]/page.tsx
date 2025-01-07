import React from "react";
import Header from "@/app/Components/header";


 const Comment = async ( {params} : {params :{id: string}} ) => {
    const id = await params.id; 
    const req = await fetch(
      `https://jsonplaceholder.typicode.com/Comments/${id}`
    );
    const Comments = await req.json(); 
  
    return (
      <>
        <Header />
        <div className="flex flex-col items-center">
        <h1 className="font-semibold font-mono my-3 text-2xl">
          Comment #{Comments.id} Details
        </h1>
        <div className="max-w-md text-gray-900 divide-y divide-gray-200">
          <div className="py-3">
            <h2 className="mb-1 text-gray-500 md:text-lg">Name</h2>
            <p className="text-lg font-semibold">{Comment.name}</p>
          </div>
          <div className="py-3">
            <h2 className="mb-1 text-gray-500 md:text-lg">Email</h2>
            <p className="text-lg">{Comments.email}</p>
          </div>
          <div className="py-3">
            <h2 className="mb-1 text-gray-500 md:text-lg">Body</h2>
            <p className="text-lg">{Comments.body}</p>
          </div>
        </div>
        <a
          href="/Comments"
          className="mt-5 text-blue-500 hover:underline"
        >
          Back to Comments
        </a>
      </div>
</>
    );
  };
  export default Comment;