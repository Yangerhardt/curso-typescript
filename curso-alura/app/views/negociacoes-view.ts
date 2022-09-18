import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View <Negociacoes>{

  protected template(modelo: Negociacoes): string { //necessário colocar protected pois ao herdar ao redefinir o método, ele por padrão se torna PUBLIC.
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
        </tr>
      </thead>
      <tbody>
        ${modelo.listaNegociacoes().map(negociacao => {
          return `
            <tr> 
              <td>${this.formatarData(negociacao.data)}</td> 
              <td>${negociacao.quantidade}</td> 
              <td>${negociacao.valor}</td> 
            </tr>
          `
        }).join("")}
      </tbody>
    </table>
    `; // o JOIN é usado porque se não, sempre que adicionassemos uma nova transação, ele colocaria uma vírgula separando elas, então serve justamente para eliminar essa vírgula e concatenar todo o conteúdo.
  }

  private formatarData(data: Date): string { //tornando o método private, somente DENTRO da classe terá acesso a ele, nem as filhas terão.
    return new Intl.DateTimeFormat().format(data)
  }
}

