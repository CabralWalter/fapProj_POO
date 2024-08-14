import * as readlineSync from 'readline-sync';
import { Cliente } from './clientes';
import { Produto } from './Produto';

class Menu {
    private clientes: Cliente[] = [];

    public exibirMenu(): void {
        let opcao: number;
        do {
            console.log(`
1. Adicionar Cliente
2. Adicionar Produto
3. Atualizar Produto
4. Remover Produto
5. Listar Produtos
6. Criar Pedido
7. Visualizar Pedidos
8. Sair
            `);

            opcao = readlineSync.questionInt('Escolha uma opção: ');

            switch (opcao) {
                case 1:
                    this.adicionarCliente();
                    break;
                case 2:
                    this.adicionarProduto();
                    break;
                case 3:
                    this.atualizarProduto();
                    break;
                case 4:
                    this.removerProduto();
                    break;
                case 5:
                    this.listarProdutos();
                    break;
                case 6:
                    this.criarPedido();
                    break;
                case 7:
                    this.visualizarPedidos();
                    break;
                case 8:
                    console.log('Saindo...');
                    break;
                default:
                    console.log('Opção inválida');
            }
        } while (opcao !== 8);
    }

    private adicionarCliente(): void {
        const nome = readlineSync.question('Nome do Cliente: ');
        const email = readlineSync.question('Email do Cliente: ');
        const endereco = readlineSync.question('Endereço do Cliente: ');

        const cliente = new Cliente(nome, email, endereco);
        this.clientes.push(cliente);

        console.log('Cliente adicionado com sucesso!');
    }

    private adicionarProduto(): void {
        const id = readlineSync.questionInt('ID do Produto: ');
        const nome = readlineSync.question('Nome do Produto: ');
        const preco = readlineSync.questionFloat('Preço do Produto: ');
        const categoria = readlineSync.question('Categoria do Produto: ');

        const produto = new Produto(id, nome, preco, categoria);
        Produto.cadastrarProduto(produto);
    }

    private atualizarProduto(): void {
        const id = readlineSync.questionInt('ID do Produto a ser atualizado: ');
        const nome = readlineSync.question('Novo Nome do Produto: ');
        const preco = readlineSync.questionFloat('Novo Preço do Produto: ');
        const categoria = readlineSync.question('Nova Categoria do Produto: ');

        Produto.atualizarProduto(id, nome, preco, categoria);
    }

    private removerProduto(): void {
        const id = readlineSync.questionInt('ID do Produto a ser removido: ');
        Produto.removerProduto(id);
    }

    private listarProdutos(): void {
        Produto.listarProdutos();
    }

    private criarPedido(): void {
        const clienteEmail = readlineSync.question('Email do Cliente: ');
        const cliente = this.clientes.find(c => c.email === clienteEmail);

        if (!cliente) {
            console.log('Cliente não encontrado!');
            return;
        } else {
            console.log('Cliente encontrado!');
            // Aqui você pode adicionar a lógica para criar um pedido
        }
    }

    private visualizarPedidos(): void {
        console.log('Função para visualizar pedidos será implementada aqui.');
    }
}

const menu = new Menu();
menu.exibirMenu();
