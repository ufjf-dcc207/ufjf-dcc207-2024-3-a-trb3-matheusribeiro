import { useRef } from "react";
import { BookType } from "../types/Book";
import "./Book.css";

interface BookProps {
  book: BookType;
  onUpdateBook: (book: BookType) => void;
}

export default function Book({ book, onUpdateBook }: BookProps) {
  const progressRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);

  const handleUpdate = () => {
    const newProgress = Number(progressRef.current?.value);
    const newStatus = statusRef.current?.value as string;

    onUpdateBook({
      ...book,
      progress: Math.min(newProgress, book.pages),
      status: newStatus,
    });
  };

  return (
    <div className="book">
      <div className="textContainer">
        <p className="text">Nome: {book.name}</p>
        <p className="text">Autor: {book.author}</p>
        <p className="text">Número de Páginas: {book.pages}</p>
        <p className="text">
          Progresso de Leitura: {book.progress}/{book.pages}
        </p>
        <p className="text">Status: {book.status}</p>
        <div className="edit">
          <p>Página que parou: </p>
          <input type="number" id="progress" min={0} max={book.pages} ref={progressRef} defaultValue={book.progress} onChange={handleUpdate}/>
          <label htmlFor="status">Status de Leitura:</label>
          <select id="status" onChange={handleUpdate} ref={statusRef} defaultValue={book.status} required>
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
