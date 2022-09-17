export class View <T>{ // usamos o <T> para definir a tipagem GENÉRICA para a classe. As filhas terão de definir qual a tipagem a ser utilizada, para substitutir a genérica de acordo com a necessidade.

  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor)
  }

  template(modelo: T): string {
    throw Error("Classe filha precisa implementar o método template")
    // o método template foi criado na classe View porque o método update precisa dele definido na mesma classe
    // porém, a classe filha precisará sobescrever o método para que ele passe, caso contrário apenas reotrnará um erro.
  }

  update(modelo: T): void {
    const template = this.template(modelo)
    this.elemento.innerHTML = template
  }
}