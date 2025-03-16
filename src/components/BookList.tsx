import "./BookList.css";
import Book from "./Book";
import { BookType } from "../types/Book";

interface BookListProps {
  books: BookType[];
  onUpdateBook: (book: BookType) => void;
}

export default function BookList({ books , onUpdateBook}: BookListProps) {
  const categorias = {
    "quero-ler": "Quero Ler",
    "lendo": "Lendo",
    "concluido": "Concluído",
    "abandonado": "Abandonado",
  };

  return (
    <div className="containerLists">
      {(Object.keys(categorias) as Array<keyof typeof categorias>).map((status) => (
        <div className="list" key={status}>
          <h1 className="textStatus">{categorias[status]}</h1>
            {books
              .filter((livro) => livro.status === status)
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
