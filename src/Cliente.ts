type ClienteInfo = {
    idCliente: number;
    nomeCliente: string;
    emailCliente: string;
    enderecoCliente: string;
};

class Cliente {
    private clientes: ClienteInfo[] = [];
    private proximoId: number = 1;

    // Método para cadastrar um novo cliente
    cadastrarCliente(nomeCliente: string, emailCliente: string, enderecoCliente: string): ClienteInfo {
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
    atualizarCliente(idCliente: number, nomeCliente: string, emailCliente: string, enderecoCliente:string): boolean {
        const cliente = this.clientes.find(c => c.id === id);
        if (cliente) {
            cliente.nomeCliente = nomeCliente;
            cliente.emailCliente = emailCliente;
            cliente.enderecoCliente = enderecoCliente;
            return true;
        }
        return false;
    }

    // Método para remover um cliente pelo ID
    removerCliente(idCliente: number): boolean {
        const indice = this.clientes.findIndex(c => c.idCliente === idCliente);
        if (indice !== -1) {
            this.clientes.splice(indice, 1);
            return true;
        }
        return false;
    }

    // Método para listar todos os clientes
    listarClientes(): ClienteInfo[] {
        return this.clientes;
    }
}

// Exemplo de uso:

const clienteManager = new Cliente();

// Cadastrar clientes
clienteManager.cadastrarCliente("João", "joao@example.com");
clienteManager.cadastrarCliente("Maria", "maria@example.com");

// Atualizar um cliente
clienteManager.atualizarCliente(1, "João Silva", "joaosilva@example.com");

// Remover um cliente
clienteManager.removerCliente(2);

// Listar todos os clientes
console.log(clienteManager.listarClientes());