interface GoogleBook {
    id: string;
    title: string;
    author: string;
    pageCount: number;
}

export async function SearchBooks(query: string): Promise<GoogleBook[]> {
    try{
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=3`);

        if(!response.ok){
            throw new Error('Erro na API')
        }
        
        const data = await response.json();
        return data.items;
    } catch(error){
        console.error('Erro na Busca de livros', error);
        throw error;
    }
}