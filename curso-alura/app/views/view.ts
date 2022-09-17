export abstract class View <T>{ // usamos o <T> para definir a tipagem GENÉRICA para a classe. As filhas terão de definir qual a tipagem a ser utilizada, para substitutir a genérica de acordo com a necessidade.
// dentro do <> pode ser usado qualquer caractere para identificar o genérico. (T é só uma convenção pra Type)

  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor)
  }

  abstract template(modelo: T): string

  update(modelo: T): void {
    const template = this.template(modelo)
    this.elemento.innerHTML = template
  }
}