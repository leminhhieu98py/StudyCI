import { useState } from "react";
import CreateContainer from "./container";

export default function CreateHeader() {
    const url = "https://www.googleapis.com/books/v1/volumes?q=";
    let [input, setInput] = useState("");
    let [outputBook, setOutputBook] = useState([]);
    let handleClick = (event) => {
        event.preventDefault();
        let output = [];
        fetch(`${url}${input}`)
            .then((res) => res.json())
            .then((books) => {
                console.log(books);
                books.items.map((book) => {
                    output.push(
                        <CreateContainer
                            key={book.id}
                            title={book.volumeInfo.title}
                            img={
                                book.volumeInfo.imageLinks === undefined
                                    ? ""
                                    : book.volumeInfo.imageLinks.thumbnail
                            }
                            author={book.volumeInfo.authors}
                            publisher={book.volumeInfo.publisher}
                        />
                    );
                });
                setOutputBook(output);
                return null;
            }).catch(console.log("Hi"));
        setInput("");
    };
    return (
        <div>
            <div className="header">
                <h1>Book Finder</h1>
                <form action="submit">
                    <input
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        type="text"
                        placeholder="Type author, book name, subject,.."
                    />
                    <button disabled={input === ""} onClick={handleClick}>
                        Search
                    </button>
                </form>
            </div>
            <div className="list">{outputBook}</div>
        </div>
    );
}
