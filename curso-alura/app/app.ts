import { NegociacaoController } from "./controllers/negociacao-controller.js"; //SEMPRE COLOCAR O .js NO FINAL

const controller = new NegociacaoController
const form = document.querySelector(".form")
form.addEventListener("submit", (event) => {
  event.preventDefault()

  controller.adiciona()
  
})