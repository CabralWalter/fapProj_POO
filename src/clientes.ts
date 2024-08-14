export class Cliente {
    constructor(
        public nome: string,
        public email: string,
        public endereco: string
    ) {
        this.nome = nome;
        this.email = email;
        this.endereco = endereco;
    }
}

