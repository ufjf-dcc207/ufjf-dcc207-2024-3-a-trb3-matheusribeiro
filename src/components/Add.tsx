import { FormEvent, useRef } from "react";
import "./Add.css";
import { BookType } from "../types/Book";

interface AddProps {
  dispatch: (action: { type: "ADD_BOOK"; payload: BookType }) => void;
}

export default function Add({ dispatch }: AddProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const name = formRef.current.nome.value;
    const author = formRef.current.author.value;
    const pages = formRef.current.pages.value;
    const progress = formRef.current.progress.value;
    const status = formRef.current.status.value;

    const newBook: BookType = {
      id: Date.now(),
      name,
      author,
      pages,
      progress,
      status,
    };

    dispatch({ type: "ADD_BOOK", payload: newBook });

    formRef.current.reset();
  };

  return (
    <div className="containerForm">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form">
          <div>
            <label htmlFor="nome">Nome:</label>
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
            <input
              id="progress"
              type="number"
              min={0}
              required
            />
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
