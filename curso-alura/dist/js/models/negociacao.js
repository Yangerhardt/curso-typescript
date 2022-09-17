export class Negociacao {
    constructor(_data, // o _ é usado pois o getter não pode ter o mesmo nome que a propriedade!
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime()); // programação defensiva criada para que o valor da data não possa ser alterado, mas que ainda precisa ser retornado para a leitura.
        return data; // dessa forma, será retornado somente o valor da cópia da data, e não o valor da data original que não poderá ser alterada.
    }
}
