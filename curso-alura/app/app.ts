import { NegociacaoController } from "./controllers/negociacao-controller.js"; //SEMPRE COLOCAR O .js NO FINAL

const controller = new NegociacaoController
const form = document.querySelector(".form")
if (form) { // colocamos o form dentro de uma condição para verificar se ele não é nulo, uma vez que sem ele o QS poderia ser nulo ou um htmlinputelement. Dessa maneira, o TS reconhece que dentro da condição o form existe e não é nulo.
  form.addEventListener("submit", (event) => {
    event.preventDefault()
  
    controller.adiciona()  
  });
} else {
  throw Error("Não foi possível inicializar a aplicação. Verifique se o form não é nulo.");
  
}
