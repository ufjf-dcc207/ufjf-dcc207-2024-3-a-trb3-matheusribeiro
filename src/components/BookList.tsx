import "./BookList.css";
import Book from "./Book";

export default function BookList({ books }) {
  return (
    <div className="containerLists">
      <div className="list">
        <h1>QUERO LER</h1>
        {books
          .filter((book) => book.status === "quero-ler")
          .map((book) => (
            <li key={book.id}>
              <Book book={book} />
            </li>
          ))}
      </div>
      <div className="list">
        <h1>LENDO</h1>
        {books
          .filter((book) => book.status === "lendo")
          .map((book) => (
            <li key={book.id}>
              <Book book={book} />
            </li>
          ))}
      </div>
      <div className="list">
        <h1>CONCLUÍDO</h1>
        {books
          .filter((book) => book.status === "concluido")
          .map((book) => (
            <li key={book.id}>
              <Book book={book} />
            </li>
          ))}
      </div>
      <div className="list">
        <h1>ABANDONADO</h1>
        {books
          .filter((book) => book.status === "abandonado")
          .map((book) => (
            <li key={book.id}>
              <Book book={book} />
            </li>
          ))}
      </div>
    </div>
  );
}
