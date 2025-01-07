import Link from "next/link";
import React from "react";
import Header from "../Components/header";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
 
};

export default async function Users() {

  const req = await fetch("https://jsonplaceholder.typicode.com/users");

  const res: User[] = await req.json(); 

  return (
    <div>
      <Header />
      <h1 className="font-semibold font-mono my-3 text-2xl text-center">
        API Fetch User Details
      </h1>
      <div className="flex flex-wrap justify-center gap-3 mt-3">
        {res.map((data, index) => {
          return (
            <div
              key={index}
              className="w-80 p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center hover:bg-gray-200"
            >
              <Link href={`/Users/${data.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {data.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  {data.username}
                </p>
                <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  Details
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          );
        }
        )
        }
      </div>
    </div>
  );
}


