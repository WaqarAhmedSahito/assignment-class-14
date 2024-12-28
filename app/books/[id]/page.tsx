import React from "react";

interface Params {
    params: {
        id: string; // Dynamic route parameter type
    };
}

interface IBook {
    id: number;
    name: string;
    author: string;
    type: string;
    price: number;
    "current-stock": number;
    available: boolean;
}

const Page = async ({ params }: Params) => {
    const { id } = params; // Directly destructure `id` from params

    try {
        const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`);

        if (!res.ok) {
            throw new Error(`Failed to fetch book details for id: ${id}`);
        }

        const data: IBook = await res.json();

        return (
            <div className="text-4xl">
                <h1>Id: {id}</h1>
                <h2>Name: {data.name}</h2>
                <h2>Author: {data.author}</h2>
            </div>
        );
    } catch (error) {
        console.error("Error fetching book details:", error);

        return (
            <div className="text-4xl">
                <h1>Error: Unable to load book details</h1>
                <p>{error instanceof Error ? error.message : "Unknown error occurred"}</p>
            </div>
        );
    }
};

export default Page;
