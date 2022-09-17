export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(modelo) {
        throw Error("Classe filha precisa implementar o método template");
        // o método template foi criado na classe View porque o método update precisa dele definido na mesma classe
        // porém, a classe filha precisará sobescrever o método para que ele passe, caso contrário apenas reotrnará um erro.
    }
    update(modelo) {
        const template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}
