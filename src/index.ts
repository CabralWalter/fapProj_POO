import { Produto } from "./Produto"

const produto = new Produto(3,"Blusa",45.65,"Roupa")
Produto.cadastrarProduto(produto)
Produto.cadastrarProduto(new Produto(1,"Espelho",10.9,"casa"))
Produto.cadastrarProduto(new Produto(2,"Toalha",59.00,"Banho"))
Produto.atualizarProduto(3,"Espelho",10.9,"Categoria")
Produto.removerProduto(1)
Produto.listarProdutos()