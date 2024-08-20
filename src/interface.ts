import * as readlineSync from 'readline-sync';
import { Cliente} from './Cliente';
import { Produto } from './Produto';
import { Pedido } from './Pedido';

class Menu {
    private clienteManager: Cliente = new Cliente();

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

        const cliente = this.clienteManager.cadastrarCliente(nome, email, endereco);

        console.log('Cliente adicionado com sucesso! ID:', cliente.idCliente);
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
        const emailCliente = readlineSync.question('Email do Cliente: ');
        const cliente = this.clienteManager.buscarClientePorEmail(emailCliente);

        if (!cliente) {
            console.log('Cliente não encontrado!');
            return;
        }

        const produtos: Produto[] = [];
        let adicionarMaisProdutos: boolean;

        do {
            const idProduto = readlineSync.questionInt('ID do Produto: ');
            const produto = Produto.buscarProdutoPorId(idProduto);

            if (!produto) {
                console.log('Produto não encontrado!');
            } else {
                produtos.push(produto);
                console.log('Produto adicionado ao pedido.');
            }

            adicionarMaisProdutos = readlineSync.keyInYNStrict('Deseja adicionar outro produto? ');

        } while (adicionarMaisProdutos);

        const pedido = new Pedido(Pedido['pedidos'].length + 1, cliente, produtos);
        Pedido.adicionarPedido(pedido);
    }

    private visualizarPedidos(): void {
        Pedido.listarPedidos();
    }
}

const menu = new Menu();
menu.exibirMenu();