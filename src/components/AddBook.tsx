import { FormEvent, useRef } from "react";
import "./AddBook.css";
import { BookType } from "../types/Book";
import SearchBook from "./SearchBook";

interface AddProps {
  onAddBook: (book: BookType) => void;
}

export default function AddBook({ onAddBook }: AddProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const title = formRef.current.nome.value;
    const author = formRef.current.author.value;
    const pages = formRef.current.pages.value;
    const progress = formRef.current.progress.value;
    const status = formRef.current.status.value;

    const newBook: BookType = {
      id: Date.now(),
      title,
      author,
      pages,
      progress,
      status,
    };

    onAddBook(newBook);
    formRef.current.reset();
  };

  return (
    <div className="containerForm">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form">
          <SearchBook />
          <div>
            <label htmlFor="nome">Título:</label>
            <input id="nome" type="text" required />
          </div>
          <div>
            <label>Autor:</label>
            <input id="author" type="text" required />
          </div>
          <div>
            <label>Número de Páginas:</label>
            <input id="pages" type="number" min={0} required />
          </div>
          <div>
            <label>Progresso de Leitura:</label>
            <input id="progress" type="number" min={0} required />
          </div>
          <div>
            <label htmlFor="status">Status de Leitura:</label>
            <select id="status" required>
              <option value="quero-ler">Quero Ler</option>
              <option value="lendo">Lendo</option>
              <option value="concluido">Concluído</option>
              <option value="abandonado">Abandonado</option>
            </select>
          </div>
          <button type="submit">Adicionar</button>
        </div>
      </form>
    </div>
  );
}
