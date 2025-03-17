import "./BookList.css";
import Book from "./Book";
import { BookType } from "../types/Book";

interface BookListProps {
  books: BookType[];
  onUpdateBook: (book: BookType) => void;
}

export default function BookList({ books , onUpdateBook}: BookListProps) {
  const categories = {
    "quero-ler": "Quero Ler",
    "lendo": "Lendo",
    "concluido": "Concluído",
    "abandonado": "Abandonado",
  };

  return (
    <div className="containerLists">
      {(Object.keys(categories) as Array<keyof typeof categories>).map((status) => (
        <div className="list" key={status}>
          <h1 className="textStatus">{categories[status]}</h1>
            {books
              .filter((book) => book.status === status)
              .map((book) => (
                <li key={book.id} className="card">
                  <Book book={book} onUpdateBook={onUpdateBook}/>
                </li>
              ))}
        </div>
      ))}
    </div>
  );
}
