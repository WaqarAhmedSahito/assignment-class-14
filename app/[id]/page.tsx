interface DynamicBookProps {
    params: {
        id: string;
    };
}

const DynamicBook = async (props: DynamicBookProps) => {
    try {
        const url = await fetch(
            `https://simple-books-api.glitch.me/books/${props.params.id}`
        );
        const res = await url.json();

        if (res.error) {
            return (
                <h1 className="pl-5 text-5xl">
                    Error: {res.error}
                </h1>
            );
        }

        return (
            <h1 className="pl-5 text-5xl">
                {props.params.id} <br />
                {res.name} <br />
                {res.author} <br />
            </h1>
        );
    } catch (error) {
        console.error("Error fetching book:", error);
        return (
            <h1 className="pl-5 text-5xl">
                Error: Could not load book details
            </h1>
        );
    }
};

export default DynamicBook;
