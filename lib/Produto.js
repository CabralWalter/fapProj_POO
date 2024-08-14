"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(id, nome, preco, categoria) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
    Produto.cadastrarProduto = function (produto) {
        var VerificarId = this.produtos.find(function (p) { return p.id === produto.id; });
        if (VerificarId) {
            console.log("Id já cadastrado");
        }
        else {
            this.produtos.push(produto);
            console.log("Produto cadastrado com sucesso");
        }
    };
    Produto.atualizarProduto = function (id, nome, preco, categoria) {
        var produto = this.produtos.find(function (p) { return p.id === id; });
        if (produto) {
            produto.nome = nome;
            produto.preco = preco;
            produto.categoria = categoria;
            console.log("Produto atualizado com sucesso");
        }
        else {
            console.log("Produto não encontrado");
        }
    };
    Produto.removerProduto = function (id) {
        var indexProduto = this.produtos.findIndex(function (p) { return p.id === id; });
        if (indexProduto >= 0) {
            this.produtos.splice(indexProduto, 1);
            console.log("Produto removido com sucesso");
        }
        else {
            console.log("Produto não encontrado");
        }
    };
    Produto.listarProdutos = function () {
        this.produtos.forEach(function (produto) {
            console.log("Produto: ".concat(produto.nome, ", Pre\u00E7o: ").concat(produto.preco, ", Categoria: ").concat(produto.categoria));
        });
    };
    Produto.produtos = [];
    return Produto;
}());
exports.Produto = Produto;
