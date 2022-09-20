export function domInjector (seletor: string) {
  return function(target: any, propertyKey: string) {
    console.log(`Modificando prototype ${target.constructor.name} 
    e adicionando getter para a propriedade ${propertyKey}`);

    let elemento: HTMLElement;
    
    const getter = function() {
      if (!elemento) { // caso o elemento esteja vazio, ele irá buscar no DOM. Se não, ele retornará o elemento sem buscar no DOM. Dessa maneira, será buscado somente uma única vez.
        elemento = document.querySelector(seletor) as HTMLElement;
        console.log(`Buscando elemento do DOM com o seletor ${seletor} para injetar em ${propertyKey}.`);
      }
      return elemento
    }

    Object.defineProperty(
      target,
      propertyKey,
      { get: getter }
    )
  }
}