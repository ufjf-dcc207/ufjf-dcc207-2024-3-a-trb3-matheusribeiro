import "./Adiciona.css";

export default function Adiciona() {
  return (
    <div>
      <div>
        <form action="post">
          <div>
            <label htmlFor="nome">Nome:</label>
            <input id="nome" type="text"/>
          </div>
          <div>
            <label>Autor:</label>
            <input id="autor" type="text"/>
          </div>
          <div>
            <label>Número de Páginas:</label>
            <input id="paginas" type="number" min={0}/>
          </div>
          <div>
            <label>Progresso de Leitura:</label>
            <input id="progresso" type="number" min={0}/>
          </div>
          <div>
            <label htmlFor="status">Status de Leitura:</label>
            <select id="status">
                <option value="quero-ler">Quero Ler</option>
                <option value="lendo">Lendo</option>
                <option value="concluido">Concluído</option>
                <option value="abandonado">Abandonado</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
