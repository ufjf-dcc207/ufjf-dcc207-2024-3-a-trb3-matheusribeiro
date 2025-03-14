export interface BookType{
    id: number,
    name: string,
    author: string,
    pages: number,
    progress: number,
    status: "quero-ler" | "lendo" | "concluido" | "abandonado";
}