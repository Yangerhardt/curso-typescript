import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = []; // Feito dessa maneira para que a lista se torne privada e não seja possível remover itens dela, somente adicionar com o método que será criado posteriormente.
    // o Negociacao[] tem o mesmo resultado que se colocado Array<Negociacao>, então é um atalho.


    adicionaNegociacoes(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    listaNegociacoes(): readonly Negociacao[] { // readonly Negociacao[] === ReadonlyArray<Negociacao>
        return [...this.negociacoes] //Usando o spread operator para colocar todos os itens de negociacoes dentro da nova lista, não poderá ser retirado nenhumd os itens da lista.
    }
}

const negociacoes = new Negociacoes()
