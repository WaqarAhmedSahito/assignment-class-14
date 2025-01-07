import React from "react";
import Header from "@/app/Components/header";
import Link from "next/link";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const PostDetails = async ( {params} :{params: {id: string}}) => {
    const id = await params.id
    const req = await fetch(
      `https://jsonplaceholder.typicode.com/Posts/${id}`
    );
    const post: Post = await req.json(); 
  
    return (
      <>
        <Header />
        <div className="flex flex-col items-center">
          <h1 className="font-semibold font-mono my-3 text-2xl">
            Post #{post.id} Details
          </h1>
          <div className="max-w-md text-gray-900 divide-y divide-gray-200">
            <div className="py-3">
              <h2 className="mb-1 text-gray-500 md:text-lg">Title</h2>
              <p className="text-lg font-semibold">{post.title}</p>
            </div>
            <div className="py-3">
              <h2 className="mb-1 text-gray-500 md:text-lg">Body</h2>
              <p className="text-lg">{post.body}</p>
            </div>
          </div>
          <Link
            href="/Posts"
            className="mt-5 text-blue-500 hover:underline"
          >
            Back to Posts
          </Link>
        </div>
      </>
    );
  };
  
  export default PostDetails;
  
  