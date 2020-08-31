const encrypt = (text) => {
  if (Number.isInteger(text)) return text;
  var vowels = [
    "a",
    "e",
    "i",
    "o",
    "u",
    "å",
    "ä",
    "ö",
    "A",
    "E",
    "I",
    "O",
    "U",
    "Å",
    "Ä",
    "Ö",
    " ",
    "!",
    "%",
    "?",
    "#",
    "'",
    "*",
    "(",
    ")",
    "[",
    "]",
  ];
  var y = "";
  for (i = 0; i < text.length; i++) {
    var current = text.charAt(i);
    if (vowels.indexOf(current) != -1) {
      y = y + current;
    } else {
      if (current === current.toLowerCase()) {
        y = y + current + "o" + current;
      } else {
        y = y + current + "O" + current;
      }
    }
  }
  return y;
};

const consonants = "bcdfghjklmnpqrstvxzBCDFGHJKLMNPQRSTVXZ";
const decrypt = (text, acc = "") =>
  Number.isInteger(text)
    ? text
    : text.length === 0
    ? acc
    : consonants.includes(text[0])
    ? decrypt(text.slice(3), acc + text[0])
    : decrypt(text.slice(1), acc + text[0]);

module.exports = {
  encrypt,
  decrypt,
};
