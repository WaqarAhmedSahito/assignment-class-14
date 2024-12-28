import Link from "next/link";

export default async function Home() {
  interface myBook {
    name: string,
    type: string,
    id: number,
    available: boolean,
  }

  const res = await fetch('https://simple-books-api.glitch.me/books');
  const data: myBook[] = await res.json();

  return (
    <>
      <h1 className="text-6xl">Books</h1>

      {data.map((book) => (
        <div key={book.id} className="text-4xl">
          <Link href={`/books/${book.id}`}>
            <h2>{book.name}</h2>
          </Link>
        </div>
      ))}
    </>
  );
}
