import React from "react";
import Header from "../Components/header";
import Link from "next/link";

type Comment = {
    id: number;
    name: string;
    username: string;
    email: string;

};
export default async function Comments() {
    const url = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments: Comment[] = await url.json();

    return (
        <div>
            <Header />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 my-6 mx-6">
                {comments.map((data, index) => (
                    <div key={index}>
                        <Link href={`/Comments/${data.id}`}>
                        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                            <div className="border-b pb-2 mb-2">
                                <h2 className="font-bold text-lg text-blue-600 gap-2 flex">
                                    Comment # {data.id}
                                </h2>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 mb-2">{data.name}</p>
                            </div>
                        </div>
                    </Link>
                    </div>
                ))}
        </div>
    </div>

    );
}

