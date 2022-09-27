// Desafio 11
function generatePhoneNumber(array) {
  let contador = -1;
  let arrayContador = [];
  let ddd = [];
  let primeiraSecao = [];
  let segundaSecao = [];

  for (index = 0; index < 2; index += 1){
    ddd.push(array[index]);
  }
  for (index = 2; index < 7; index += 1){
    primeiraSecao.push(array[index]);
  }
  for (index = 7; index < array.length; index += 1){
    segundaSecao.push(array[index]);
  }

  for (let index = 0; index < array.index; index += 1) {
    for (let index2 = 0; index2 < array.index; index2 += 1) {
      if (array[index] === array[index2]) {
        contador += 1;
      }
    }
    arrayContador.push(contador);
    contador = 0;
  }

  if (array.length !== 11) {
    return 'Array com tamanho incorreto';
  }
  else {
    for (let number of array) {
      if (number < 0 || number > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    for (let number of arrayContador) {
      if (number === 3){
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return '(' + ddd.join('') + ') ' + primeiraSecao.join('') + '-' + segundaSecao.join('');
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
