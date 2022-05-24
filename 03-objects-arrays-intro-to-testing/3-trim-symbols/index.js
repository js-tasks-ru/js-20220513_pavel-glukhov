/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (!string || size === 0) {
    return "";
  } else if (!size) {
    return string;
  }

  let char = string[0];
  let sameChar = 1;
  let result = [char];

  for (let i = 1; i < string.length; i++) {
    if (char === string[i]) {
      ++sameChar;
      if (sameChar <= size) {
        result.push(string[i]);
      }
    } else {
      char = string[i];
      sameChar = 1;
      result.push(string[i]);
    }
  }
  return result.join("");
}
