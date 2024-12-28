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

// You can remove the `async` from the component and handle async operations inside the function
const Page = ({ params }: Params) => {
  const [bookData, setBookData] = React.useState<IBook | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const { id } = params;
        const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch book details for id: ${id}`);
        }
        const data: IBook = await res.json();
        setBookData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      }
    };

    fetchBookDetails();
  }, [params]); // Re-run the effect when `params` changes

  if (error) {
    return (
      <div className="text-4xl">
        <h1>Error: Unable to load book details</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!bookData) {
    return (
      <div className="text-4xl">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="text-4xl">
      <h1>Id: {params.id}</h1>
      <h2>Name: {bookData.name}</h2>
      <h2>Author: {bookData.author}</h2>
    </div>
  );
};

export default Page;
