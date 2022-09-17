import { Negociacao } from "../models/negociacao.js"; //NÃO ESQUECER DO .js NO FINAL
import { Negociacoes } from "../models/negociacoes.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adicionaNegociacoes(negociacao);
        this.negociacoes.listaNegociacoes(); // Como colocamos o método listaNegociacoes como ReadOnlyArray, se colocarmos um "." para ver os métodos disponíveis, ele irá listar somente os métodos que não alteram o Array, ou que se modificam, retornam uma nova instância do array com os dados modificados.
        console.log(this.negociacoes.listaNegociacoes());
        this.limparFormulario();
    }
    criaNegociacao() {
        const date = new Date(this.inputData.value.replace("-", ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
