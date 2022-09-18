export class Negociacao {
  constructor(
    private readonly _data: Date, // o _ é usado pois o getter não pode ter o mesmo nome que a propriedade!
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime()) // programação defensiva criada para que o valor da data não possa ser alterado, mas que ainda precisa ser retornado para a leitura.
    return data; // dessa forma, será retornado somente o valor da cópia da data, e não o valor da data original que não poderá ser alterada.
  }

  public static criaDe(dataString: string, quantidadeString: string, valorString: string) { //tipado em string para caso os dados venham de uma API ou externamente, possivelmente virão como strings.
    const date = new Date(dataString.replace("-", ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
} // ao tornar o método ESTÁTICO, ele não necessita mais da instanciação da classe, mas ainda é um método da classe. Não precisamos mais criar uma nova classe para poder chamar o método, basta usar o Negociacao.criaDe().
}


