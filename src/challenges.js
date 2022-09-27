// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let array = sentence.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let concatenado = array[array.length - 1] + ', ' + array[0]
  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maior = Number.NEGATIVE_INFINITY;
  let contador = 0;
  for (let number of array) {
    if (number >= maior) {
      maior = number;
    }
  }
  for (let number of array) {
    if (number === maior) {
      contador += 1;
    }
  }
  return contador;
}


// Desafio 7
function catAndMouse(posMouse, posCat1, posCat2) {
  let distanceCat1 = Math.abs(posMouse - posCat1);
  let distanceCat2 = Math.abs(posMouse - posCat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
