export enum DiasDaSemana { //o enum numera as variáveis em ordem crescente começando do 0 sempre.
  DOMINGO = 0,
  SEGUNDA = 1,
  TERCA = 2,
  QUARTA = 3,
  QUINTA = 4,
  SEXTA = 5,
  SABADO = 6,
}

// o interessante do ENUM é que ele tem a propriedade READONLY.



// Nesse caso não precisaria numerar os itens pois o enum já cuida disso, PORÉM, caso algum item estivesse fora de 
// ordem, toda a numeração seria modificada, então para maior segurança vale a atribuição de valor.