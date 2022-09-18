export class View {
    constructor(seletor, apagar) {
        this.apagar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
        if (apagar) {
            this.apagar = apagar;
        }
    }
    update(modelo) {
        let template = this.template(modelo);
        if (this.apagar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
