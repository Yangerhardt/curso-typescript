export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (
    target: any,
    propertyKey: string, // Passa o nome do método que foi decorado como string
    descriptor: PropertyDescriptor // Tem uma referencia para o método original que queremos executar
  ) {
    const metodoOriginal = descriptor.value; // o MÉTODO ORIGINAL é o método em que iremos aplicar esse descriptor, seja o update, o adiciona ou qualquer outro método já criado.
    // Queremos salvar esse método para que ele possa ser executado após a definição do t1.
    descriptor.value = function(...args: Array<any>) { // Como não sabemos quantos argumentos a função original tem, é necessário armazená-los para que possam ser passados posteriormente na execução do método original.
      let divisor = 1;
      let unidade = "milisegundos";
      if (emSegundos) {
        divisor = 1000;
        unidade = "segundos";
      } 
      const t1 = performance.now()
      const retorno = metodoOriginal.apply(this, args) //Aqui executamos o método original e salvamos o seu retorno em uma variável que será retornada no final da execução.
      const t2 = performance.now()
      console.log(`${propertyKey}, Tempo de execução: ${(t2-t1)/divisor} ${unidade}.`)
      retorno
    }

    return descriptor
  }
}