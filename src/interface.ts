import * as readlineSync from 'readline-sync';
import { Cliente } from './clientes';



class Menu {
    private clientes: Cliente[] = [];
    public exibirMenu(): void {
        let opcao: number;
        do {
            console.log(`
1. Adicionar Cliente
2. Adicionar Produto
3. Criar Pedido
4. Visualizar Pedidos
5. Sair
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
                    this.criarPedido();
                    break;
                case 4:
                    this.visualizarPedidos();
                    break;
                case 5:
                    console.log('Saindo...');
                    break;
                default:
                    console.log('Opção inválida');
            }
        } while (opcao !== 5);
    }
//Criando um usuario para ter acesso aos produtos 
    private adicionarCliente(): void {
        const nome = readlineSync.question('Nome do Cliente: ');
        const email = readlineSync.question('Email do Cliente: ');
        const endereco = readlineSync.question('Endereço do Cliente: ');

        const cliente = new Cliente(nome, email, endereco);
        this.clientes.push(cliente);

        console.log('Cliente adicionado com sucesso!');
    }

    private adicionarProduto(): void {
        console.log('Função para adicionar produto');
    }
    // Vai fazer uma busca simples PELO EMAIL DO CLIENTE cadastrado no array de objetos
    private criarPedido(): void {
        const clienteEmail =readlineSync.question('Email do Cliente: ');
        const cliente = this.clientes.find(c => c.email === clienteEmail);

        if (!cliente) {
            console.log('Cliente não encontrado!');
            return;
        }else{
            console.log('Cliente encontrado!');
            return
        }
    }

    private visualizarPedidos(): void {
        console.log('Função para visualizar pedidos será implementada aqui.');
    }
}


const menu = new Menu();
menu.exibirMenu();
