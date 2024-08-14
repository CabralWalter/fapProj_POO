export declare class Produto {
    private id;
    private nome;
    private preco;
    private categoria;
    private static produtos;
    constructor(id: number, nome: string, preco: number, categoria: string);
    static cadastrarProduto(produto: Produto): void;
    static atualizarProduto(id: number, nome: string, preco: number, categoria: string): void;
    static removerProduto(id: number): void;
    static listarProdutos(): void;
}
