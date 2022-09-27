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
function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for (let number of array) {
    if (number % 3 === 0 && number % 5 !== 0) {
      fizzBuzzArray.push('fizz');
    }
    else if (number % 5 === 0 && number % 3 !== 0) {
      fizzBuzzArray.push('buzz');
    }
    else if (number % 3 === 0 && number % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    }
    else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(text) {
  let arrayEncode = [];
  for (let letter of text) {
    if (letter === 'a') {
      arrayEncode.push(1);
    }
    else if (letter === 'e') {
      arrayEncode.push(2);
    }
    else if (letter === 'i') {
      arrayEncode.push(3);
    }
    else if (letter === 'o') {
      arrayEncode.push(4);
    }
    else if (letter === 'u') {
      arrayEncode.push(5);
    }
    else {
      arrayEncode.push(letter);
    }
  }
  return arrayEncode.join('');
}

function decode(code) {
  let arrayDecode = [];
  for (let letter of code) {
    if (letter == 1) {
      arrayDecode.push('a');
    }
    else if (letter == 2) {
      arrayDecode.push('e');
    }
    else if (letter == 3) {
      arrayDecode.push('i');
    }
    else if (letter == 4) {
      arrayDecode.push('o');
    }
    else if (letter == 5) {
      arrayDecode.push('u');
    }
    else {
      arrayDecode.push(letter);
    }
  }
  return arrayDecode.join('');
}

// Desafio 10
function techList(array, string) {
  let arrayOrdenada = array.sort();
  let arrayObjects = [];
  if (array.length === 0){
    return 'Vazio!';
  }
  else{
    for (let index = 0; index < arrayOrdenada.length; index +=1){
      arrayObjects.push({tech: arrayOrdenada[index], name: string});
    }
  }
  return arrayObjects;
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
