import "./BookList.css";
import Book from "./Book";
import { BookType } from "../types/Book";

interface BookListProps {
  books: BookType[];
  dispatch: (action: { type: "UPDATE_BOOK"; payload: BookType }) => void;
}

export default function BookList({ books , dispatch}: BookListProps) {
  const categorias = {
    "quero-ler": "Quero Ler",
    "lendo": "Lendo",
    "concluido": "Concluído",
    "abandonado": "Abandonado",
  };

  return (
    <div className="containerLists">
      {(Object.keys(categorias) as Array<keyof typeof categorias>).map((status) => (
        <div className="list">
          <h1>{categorias[status]}</h1>
            {books
              .filter((livro) => livro.status === status)
              .map((book) => (
                <li key={book.id}>
                  <Book book={book} dispatch={dispatch}/>
                </li>
              ))}
        </div>
      ))}
    </div>
  );
}
