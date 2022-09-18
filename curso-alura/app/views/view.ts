export abstract class View <T>{ // usamos o <T> para definir a tipagem GENÉRICA para a classe. As filhas terão de definir qual a tipagem a ser utilizada, para substitutir a genérica de acordo com a necessidade.
// dentro do <> pode ser usado qualquer caractere para identificar o genérico. (T é só uma convenção pra Type)

  protected elemento: HTMLElement;
  private apagar = false;

  constructor(seletor: string, apagar?: boolean) { // o "?" torna o parâmetro opcional, porém ainda precisa da lógica de modificação dele caso seja passado.
    const elemento = document.querySelector(seletor) 
    if (elemento) {
      this.elemento = elemento as HTMLInputElement;
    } else {
      throw new Error(`Seletor ${seletor} não existe no DOM. Verifique`);
      
    }
    if (apagar) {
      this.apagar = apagar // é necessário criar essa lógica com parâmetros opcionais, pois caso o valor seja passado, ele precisará ser atualizado.
    }
  }

  protected abstract template(modelo: T): string // tornar o método abstrato faz com que a sua definição seja passada para o componente filho. Caso ele não defina o método, irá gerar um erro em tempo de 
  //colocamos o protected pois o método não tem porque ser acesso na instanciação principal.

  public update(modelo: T): void {
    let template = this.template(modelo)
    if (this.apagar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "") // Regex para remover qualquer script dentro do meu template string, que possa ter sido passado de maneira maliciosa ou por engano.
    } // Nesse caso, irá remover tudo que está dentro da tag script.
    this.elemento.innerHTML = template
  }
}