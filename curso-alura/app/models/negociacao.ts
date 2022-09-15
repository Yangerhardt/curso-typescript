export class Negociacao {
  private _data: Date;
  private _quantidade: number; // O # é um novo modelo de criação de atributos privados, ou seja, quee não podem sofrer alterações
  private _valor: number;

  constructor(data: Date, quantidade: number, valor: number) {
    (this._data = data), (this._quantidade = quantidade), (this._valor = valor);
  }

  get data(): Date {
    return this._data;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._quantidade * this.valor;
  }
}
