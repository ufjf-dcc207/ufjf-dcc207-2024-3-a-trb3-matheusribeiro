import { BookType } from "../types/Book";
import "./Book.css";

interface BookProps{
  book: BookType;
}

export default function Book({book} : BookProps) {
  return (
    <div className="book">
      <div className="textContainer">
        <p className="text">Nome: {book.name}</p>
        <p className="text">Autor: {book.author}</p>
        <p className="text">Número de Páginas: {book.pages}</p>
        <p className="text">Progresso de Leitura: {book.progress}/{book.pages}</p>
        <p>Página que parou: </p>
        <input type="number" min={0} />
        <p className="text">Status: {book.status}</p>

        <button type="submit">Editar</button>
      </div>
    </div>
  );
}
