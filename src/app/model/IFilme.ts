export interface IFilme{
    nome: string;
    lancamento: string;
    duracao: string;
    classificacao: number;
    cartaz: string;
    generos: string[];
    pagina?: string; //? indica que o campo é opcional
    favorito: boolean;
}