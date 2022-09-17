import { View } from "./view.js";
export class NegociacoesView extends View {
    template(modelo) {
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
              <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td> 
              <td>${negociacao.quantidade}</td> 
              <td>${negociacao.valor}</td> 
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
    `; // o JOIN é usado porque se não, sempre que adicionassemos uma nova transação, ele colocaria uma vírgula separando elas, então serve justamente para eliminar essa vírgula e concatenar todo o conteúdo.
    }
}
