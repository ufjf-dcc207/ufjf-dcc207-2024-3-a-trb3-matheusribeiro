import { useEffect, useState } from "react";
import "./SeachBook.css";
import { GoogleBook, SearchBooks } from "../services/api";

interface SeachBookProps {
  onBookSelect: (book: GoogleBook) => void;
}

export default function SearchBook({ onBookSelect }: SeachBookProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GoogleBook[]>([]);

  useEffect(() => {
    if (query.length > 3) {
      const fetchBooks = async () => {
        try {
          const data = await SearchBooks(query);
          setResults(data);
        } catch (err) {
          console.log(err);
        }
      };
      const debounceTimer = setTimeout(fetchBooks, 500);
      return () => clearTimeout(debounceTimer);
    }
  }, [query]);

  return (
    <div>
      <label htmlFor="search">Buscar Livro: </label>
      <input
        id="search"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />

      {results.length > 0 && (
        <div>
          <ul>
            {results.map((book) => (
              <li
                key={book.id}
                onClick={() => {
                  onBookSelect(book);
                }}
              >
                {book.volumeInfo.title} - {book.volumeInfo.authors?.[0]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
