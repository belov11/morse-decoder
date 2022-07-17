const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********' : ' ',
};

function decode(expr) {
  let str = [];
  let res = [];
  let result =[];
  for (let i = 0; i < expr.length; i += 2) {
    res.push((expr[i] + expr[i + 1]));
  }
  for (let j = 0; j < res.length; j += 5) {
    result.push(res.slice(j, j + 5))
  }
  result = result.map((item) => item.map((el) => el !== "00" ? (el === "10" ? "." : (el === "11" ? "-" : el)) : ""));
  result = result.map((item) => item.join(""));
    for(let elem in result) {
      for (let key in MORSE_TABLE) {    
      if (result[elem] === key) {
       str.push(MORSE_TABLE[key]);
      } 
    }
  }
  return str.join("");
  }
  

module.exports = {
    decode
}