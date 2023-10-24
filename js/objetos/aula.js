class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const luan = new Pessoa();
luan.nome = 'Luan J A S Barros';
luan.idade = 28;

//luan.descrever();