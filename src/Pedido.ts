import { Cliente } from './clientes';
import { Produto } from './Produto';

export class Pedido {
    private id: number;
    private dataHora: Date;
    private cliente: Cliente;
    private produtos: Produto[];

    private static pedidos: Pedido[] = [];

    // Constructor
    constructor(id: number, cliente: Cliente, produtos: Produto[]) {
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
}