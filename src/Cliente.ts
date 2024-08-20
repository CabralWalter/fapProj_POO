import { ClienteInfo } from './ClienteInfo'

export class Cliente {
    private clientes: ClienteInfo[] = [];
    private proximoId: number = 1;

    public cadastrarCliente(nomeCliente: string, emailCliente: string, enderecoCliente: string): ClienteInfo {
        const novoCliente: ClienteInfo = {
            idCliente: this.proximoId,
            nomeCliente: nomeCliente,
            emailCliente: emailCliente,
            enderecoCliente: enderecoCliente
        };
        this.clientes.push(novoCliente);
        this.proximoId++;
        return novoCliente;
    }

    // Método para atualizar informações de um cliente
    public atualizarCliente(idCliente: number, nomeCliente: string, emailCliente: string, enderecoCliente: string): boolean {
        const cliente = this.clientes.find(c => c.idCliente === idCliente);
        if (cliente) {
            cliente.nomeCliente = nomeCliente;
            cliente.emailCliente = emailCliente;
            cliente.enderecoCliente = enderecoCliente;
            return true;
        }
        return false;
    }

    // Método para remover um cliente pelo ID
    public removerCliente(idCliente: number): boolean {
        const indice = this.clientes.findIndex(c => c.idCliente === idCliente);
        if (indice !== -1) {
            this.clientes.splice(indice, 1);
            return true;
        }
        return false;
    }

    // Método para listar todos os clientes
    public listarClientes(): ClienteInfo[] {
        return this.clientes;
    }

    // Método para buscar um cliente por email
    public buscarClientePorEmail(emailCliente: string): ClienteInfo | undefined {
        return this.clientes.find(c => c.emailCliente === emailCliente);
    }
}

export { ClienteInfo };
