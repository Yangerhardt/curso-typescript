import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js"; //NÃO ESQUECER DO .js NO FINAL
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";


export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement; // o private é uma propriedade única do TS, não tendo no JS
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes()
  private negociacoesView = new NegociacoesView('#negociacoesView', true)
  private mensagemView = new MensagemView('#mensagemView')

  constructor() {
    // <HTMLInputElement> === as HTMLInputElement
    this.inputData = <HTMLInputElement> document.querySelector("#data"); // o "AS" serve para garantir o tipo do retorno, uma vez que com o strictNullChecks não é mais possível ter um resutlado nulo,
    this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement; // por padrão o query selector pode retornar um HTMLInputElement ou Null (basta passar o mouse em cima dele para ver),
    this.inputValor = document.querySelector("#valor") as HTMLInputElement; // porém com o "AS", garantimos que o retorno SERÁ no formato informado, assim não temos erro de compilação.
    this.negociacoesView.update(this.negociacoes)
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

       if (!this.ehDiaUtil(negociacao.data)) { // ! na frente do booleano para modificá-lo (transformar no contrário).
        this.mensagemView.update("Apenas negociações em dias úteis são aceitas.")
        return; // caso chegue nessa linha, irá retornar o código e não continuar o método.
       }

      // como temos o return, não precisamos colocar o else do código, pois se a condição for realizada, irá finalizar o método.
      this.negociacoes.adicionaNegociacoes(negociacao)
      this.negociacoes.listaNegociacoes() // Como colocamos o método listaNegociacoes como ReadOnlyArray, se colocarmos um "." para ver os métodos disponíveis, ele irá listar somente os métodos que não alteram o Array, ou que se modificam, retornam uma nova instância do array com os dados modificados.
      this.limparFormulario();
      this.atualizaView()
  }

  private ehDiaUtil(data: Date): boolean {
    return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO //irá retornar um booleano
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes)
    this.mensagemView.update('Negociação adicionada com sucesso.')
  }
}

