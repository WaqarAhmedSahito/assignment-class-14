import Link from "next/link";

interface Book {
    id: string;
    name: string;
}

export default async function Home() {
    // Fetch data from the external API
    const url = await fetch("https://simple-books-api.glitch.me/books");
    const res: Book[] = await url.json();

    return (
        <main>
            {res.map((book, index) => (
                <div key={index}>
                    <Link href={`${book.id}`}>
                        <h1 className="text-6xl">
                            {book.id} &nbsp; &nbsp;
                            {book.name}
                        </h1>
                    </Link>
                </div>
            ))}
        </main>
    );
}
