export class Negociacao {
  constructor(
    private readonly _data: Date, // o _ é usado pois o getter não pode ter o mesmo nome que a propriedade!
    public readonly _quantidade: number,
    public readonly _valor: number
  ) {}

  get volume(): number {
    return this._quantidade * this._valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime()) // programação defensiva criada para que o valor da data não possa ser alterado, mas que ainda precisa ser retornado para a leitura.
    return data; // dessa forma, será retornado somente o valor da cópia da data, e não o valor da data original que não poderá ser alterada.
  }
}


