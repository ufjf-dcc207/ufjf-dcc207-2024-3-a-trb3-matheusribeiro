import { FormEvent, useRef, useState } from "react";
import "./AddBook.css";
import { BookType } from "../types/Book";
import SearchBook from "./SearchBook";
import { GoogleBook } from "../services/api";

interface AddProps {
  onAddBook: (book: BookType) => void;
}

export default function AddBook({ onAddBook }: AddProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [showProgress, setShowProgress] = useState(false);

  const handleSelect = (book: GoogleBook) => {
    if (!formRef.current) return;

    formRef.current.nome.value = book.volumeInfo.title;
    formRef.current.author.value = book.volumeInfo.authors?.[0];
    formRef.current.pages.value = book.volumeInfo.pageCount;
  };

  const handleStatusChange = () => {
    if (!formRef.current) return;

    switch (formRef.current.status.value) {
      case "lendo":
        setShowProgress(true);
        break;
      case "abandonado":
        setShowProgress(true);
        break;
      default:
        setShowProgress(false);
        break;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const title = formRef.current.nome.value;
    const author = formRef.current.author.value;
    const pages = formRef.current.pages.value;
    const status = formRef.current.status.value;
    let progress;

    switch (status) {
      case "quero-ler":
        progress = 0;
        break;
      case "concluido":
        progress = pages;
        break;
      default:
        progress = Math.min(
          formRef.current.progress.value,
          formRef.current.pages.value
        );
        break;
    }

    const newBook: BookType = {
      id: Date.now(),
      title,
      author,
      pages,
      progress,
      status,
    };

    onAddBook(newBook);
    setShowProgress(false);
    formRef.current.reset();
  };

  return (
    <div className="containerForm">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form">
          <SearchBook onBookSelect={handleSelect} />
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
            <label htmlFor="status">Status de Leitura:</label>
            <select id="status" onChange={handleStatusChange} required>
              <option value="quero-ler">Quero Ler</option>
              <option value="lendo">Lendo</option>
              <option value="concluido">Concluído</option>
              <option value="abandonado">Abandonado</option>
            </select>
          </div>
          {showProgress ? (
            <div>
              <label>Última Página Lida:</label>
              <input id="progress" type="number" min={0} required />
            </div>
          ) : (
            <div></div>
          )}

          <button type="submit">Adicionar</button>
        </div>
      </form>
    </div>
  );
}
