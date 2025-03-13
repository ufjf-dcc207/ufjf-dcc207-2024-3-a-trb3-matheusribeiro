import "./ListaLivros.css";
import Livro from "./Livro";

export default function ListaLivros() {
  return (
    <div className="containerListas">
      <div className="lista">
        <h1>QUERO LER</h1>
        <li>
          <Livro />
        </li>
      </div>
      <div className="lista">
        <h1>LENDO</h1>
        <li>
          <Livro />
        </li>
      </div>
      <div className="lista">
        <h1>CONCLUÍDO</h1>
        <li>
          <Livro />
        </li>
      </div>
      <div className="lista">
        <h1>ABANDONADO</h1>
        <li>
          <Livro />
        </li>
      </div>
    </div>
  );
}
