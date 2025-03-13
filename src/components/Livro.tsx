import './Livro.css'

export default function Livro(){
    return(
        <div className='livro'>
            <div className='textoContainer'>
                <p className='texto'>Nome: Sherlock Holmes</p>
                <p className='texto'>Autor: Arthur Conan Doyle</p>
                <p className='texto'>Número de Páginas: 200</p>
                <p className='texto'>Progresso de Leitura: 20/200</p>
                <p className='texto'>Status: Lendo</p>
            </div>
        </div>
    )
}