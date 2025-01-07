import React from 'react'
import Link from "next/link";
import Header from '../Components/header';
export default async function Post() {
    const url = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await url.json();
    return (
        <div>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Posts Directory</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {posts.map((post: any, index: number) => (
                        <div key={index} className="hover:shadow-lg transition-shadow">
                            <Link href={`/Posts/${post.id}`}>
                                <div className="flex flex-row items-center gap-4 p-8 text-lg bg-gray-200">

                                    <span>Post #{post.id}</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

