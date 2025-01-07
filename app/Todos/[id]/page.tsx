import React from "react";
import Header from "@/app/Components/header";

const TodoDetails = async( {params} : {params :{id: string}} ) => {
    const id = (await params).id
    const req = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const todo = await req.json(); // Explicitly type the response
  
    return (
      <>
        <Header />
        <div className="flex flex-col items-center mt-6">
          <h1 className="font-semibold text-2xl">Todo #{todo.id}</h1>
          <div className="flex items-center mt-4 space-x-4">
            <input
              type="checkbox"
             
             
              className="w-6 h-6 accent-green-500 cursor-pointer"
            />
            <p className="text-lg">{todo.title}</p>
          </div>
          <div className="flex space-x-4 mt-6">
            <a
              href="/Todos"
              className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 flex items-center"
            >
              ← Back to Todos
            </a>
           
              <button
             
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              >
                Mark as Complete
              </button>
            
          </div>
        </div>
      </>
    );
  };
  
  export default TodoDetails;
  
