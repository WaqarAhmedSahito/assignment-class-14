import React from "react";
import Header from "../Components/header";
import Link from "next/link";
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const TodosPage = async () => {
  const req = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos: Todo[] = await req.json(); // Explicitly type the response

  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <h1 className="font-semibold font-mono my-3 text-2xl">All Todos</h1>
        <ul className="w-full max-w-2xl divide-y divide-gray-200">
          {todos.slice(0, 50).map((todo) => ( // No need for `: any`
            <li key={todo.id} className="py-4">
              <h2 className="text-lg font-semibold">{todo.title}</h2>
              <p
                className={`text-sm ${
                  todo.completed ? "text-green-600" : "text-red-600"
                }`}
              >
                {todo.completed ? "Completed" : "Not Completed"}
              </p>
              <Link
                href={`/Todos/${todo.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodosPage;
