import { ClienteInfo } from './ClienteInfo';
import { Produto } from './Produto';

export class Pedido {
    private id: number;
    private dataHora: Date;
    private cliente: ClienteInfo;
    private produtos: Produto[];

    private static pedidos: Pedido[] = [];

    constructor(id: number, cliente: ClienteInfo, produtos: Produto[]) {
        this.id = id;
        this.dataHora = new Date();
        this.cliente = cliente;
        this.produtos = produtos;
    }

    // Método adicionar pedido
    public static adicionarPedido(pedido: Pedido): void {
        this.pedidos.push(pedido);
        console.log("Pedido adicionado com sucesso!");
    }

    // Método buscar pedido
    public static buscarPedidoPorId(id: number): Pedido | undefined {
        return this.pedidos.find(pedido => pedido.id === id);
    }

    // Método listar pedidos
    public static listarPedidos(): void {
        if (this.pedidos.length === 0) {
            console.log("Nenhum pedido encontrado.");
            return;
        }

        this.pedidos.forEach(pedido => {
            console.log(`Pedido ID: ${pedido.id}, Data e Hora: ${pedido.dataHora.toLocaleString()}, Cliente: ${pedido.cliente.nomeCliente}`);
            console.log("Produtos:");
            pedido.produtos.forEach(produto => {
                console.log(`- ${produto.getNome()} | Preço: ${produto.getPreco()} | Categoria: ${produto.getCategoria()}`);
            });
            console.log("------");
        });
    }

}