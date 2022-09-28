// Desafio 11
function generatePhoneNumber(array) {
  let contador = 0;
  let ddd = [];
  let primeiraSecao = [];
  let segundaSecao = [];

  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        contador += 1;
      }
      if (contador >= 3) {
        break;
      }
    }
    if (contador >= 3) {
      break;
    }
    else {
      contador = 0;
    }
  }

  for (let index = 0; index < array.length; index += 1) {
    if (array.length !== 11) {
      return 'Array com tamanho incorreto';
      break;
    }
    else if (array[index] < 0 || array[index] > 9 || contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
      break;
    }
    else if (index >= 0 && index <= 1) {
      ddd.push(array[index]);
    }
    else if (index >= 2 && index <= 6) {
      primeiraSecao.push(array[index]);
    }
    else if (index >= 7 && index <= 9) {
      segundaSecao.push(array[index]);
    }
    else {
      segundaSecao.push(array[index]);
      numeroTelefone = '(' + ddd.join('') + ') ' + primeiraSecao.join('') + '-' + segundaSecao.join('');
      return numeroTelefone;
    }
  }
}

// let arrayTeste = [1, 1, 1, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(generatePhoneNumber(arrayTeste));

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
