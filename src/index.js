const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  // 1. split the expr by 10 
  // 2. decode each symbol;
  // 3. find each letter in MORSE_TABLE

  const splittedSymbols = splitSymbols(expr);
  const decodedSymbols = decodeSymbols(splittedSymbols);
  const phrase = symbolsToLetters(decodedSymbols);

  return phrase;
}

function splitSymbols(expr) {
  let counter1 = 0;
  let counter2 = 10;
  let encodedSymbols = [];

  while (counter2 <= expr.length) {
    let symbol = expr.slice(counter1, counter2);
    encodedSymbols.push(symbol);
    counter1 += 10;
    counter2 += 10;
  }

  return encodedSymbols;
}

function decodeSymbols(encodedSymbols) {
  const decodedSymbols = [];

  for (const symbol of encodedSymbols) {
    let currSymbol = '';
    let currArr = symbol.split('');
    while (currArr.length) {
      let toCheck = currArr[0] + currArr[1];
      if (toCheck === '10') currSymbol += '.';
      if (toCheck === '11') currSymbol += '-';
      currArr.shift();
      currArr.shift();
    }
    decodedSymbols.push(currSymbol);
  }

  return decodedSymbols;
}

function symbolsToLetters(decodedSymbols) {
  const result = [];

  for (const letter of decodedSymbols) {
    if (letter === '') result.push(' ');
    result.push(MORSE_TABLE[letter]);
  }

  return result.join('');
}

module.exports = {
  decode,
};
