export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionaNegociacoes(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listaNegociacoes() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
