export class Produto {

  private id: number;
  private nome: string;
  private preco: number;
  private categoria: string;

  private static produtos: Produto[] = [];

  constructor(id: number, nome: string, preco: number, categoria: string) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  // Getters
  public getId(): number {
    return this.id;
  }

  public getNome(): string {
    return this.nome;
  }

  public getPreco(): number {
    return this.preco;
  }

  public getCategoria(): string {
    return this.categoria;
  }

  public static cadastrarProduto(produto: Produto) {
    const VerificarId = this.produtos.find(p => p.id === produto.id)
    if (VerificarId) {
      console.log("Id já cadastrado")
    }
    else {
      this.produtos.push(produto)
      console.log("Produto cadastrado com sucesso")
    }
  }

  public static atualizarProduto(id: number, nome: string, preco: number, categoria: string) {
    const produto = this.produtos.find(p => p.id === id)
    if (produto) {
      produto.nome = nome;
      produto.preco = preco;
      produto.categoria = categoria;
      console.log("Produto atualizado com sucesso")
    }
    else {
      console.log("Produto não encontrado")
    }
  }

  public static removerProduto(id: number) {
    const indexProduto = this.produtos.findIndex(p => p.id === id);
    if (indexProduto >= 0) {
      this.produtos.splice(indexProduto, 1)
      console.log("Produto removido com sucesso")
    }
    else {
      console.log("Produto não encontrado")
    }
  }

  public static listarProdutos() {
    this.produtos.forEach(produto => {
      console.log(`Produto: ${produto.nome}, Preço: ${produto.preco}, Categoria: ${produto.categoria}`);
    });
  }
}

