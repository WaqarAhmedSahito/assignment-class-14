import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  interface myBook {
    name: string,
    type: string,
    id: number,
    available: boolean,
  }
  let res = await fetch('https://simple-books-api.glitch.me/books');

  let data: myBook[] = await res.json();

  return (
    <>
      <h1 className="text-6xl">Books</h1>

      {data.map((book) => {
        return (
          <div className="text-4xl">
          <Link href={`/books/${book.id}`} key={book.id} >
            <h2 >{book.name}</h2>
          </Link>
          </div>
        )
      }
      )
      }
    </>
  );
}
