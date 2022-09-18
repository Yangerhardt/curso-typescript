import { View } from "./view.js"

export class MensagemView extends View <string>{

  protected template(modelo: string): string { //necessário colocar protected pois ao herdar ao redefinir o método, ele por padrão se torna PUBLIC.
    return `
      <p class="alert alert-info">${modelo}</p>
    `
  }
}