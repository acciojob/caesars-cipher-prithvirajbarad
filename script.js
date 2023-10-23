const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = [];

  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];
    // Check if the character is in the lookup table
    if (lookup[char] !== undefined) {
      decodedArr.push(lookup[char]);
    } else {
      // If not, it's a non-alphabetic character, so add it as is
      decodedArr.push(char);
    }
  }

  // Join the array of characters back into a string
  const decodedStr = decodedArr.join('');
  
  return decodedStr;
}

// Test the function
console.log(rot13("SERR YBIR? NPPVBWBO")); 