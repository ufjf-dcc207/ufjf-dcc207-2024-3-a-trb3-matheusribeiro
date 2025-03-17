import { useRef } from "react";
import { BookType } from "../types/Book";
import "./Book.css";

interface BookProps {
  book: BookType;
  onUpdateBook: (book: BookType) => void;
}

export default function Book({ book, onUpdateBook }: BookProps) {
  const statusRef = useRef<HTMLSelectElement>(null);

  const handleUpdate = () => {
    const newStatus = statusRef.current?.value as string;

    onUpdateBook({
      ...book,
      status: newStatus,
    });
  };

  return (
    <div className="book">
      <div className="textContainer">
        <p className="text">Título: {book.title}</p>
        <p className="text">Autor: {book.author}</p>
        <p className="text">Número de Páginas: {book.pages}</p>
        <div className="edit">
          <label htmlFor="status">Status de Leitura:</label>
          <select
            id="status"
            onChange={handleUpdate}
            ref={statusRef}
            defaultValue={book.status}
            required
          >
            <option value="quero-ler">Quero Ler</option>
            <option value="lendo">Lendo</option>
            <option value="concluido">Concluído</option>
            <option value="abandonado">Abandonado</option>
          </select>
        </div>
      </div>
    </div>
  );
}
