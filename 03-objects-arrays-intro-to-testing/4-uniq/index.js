/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (!arr || !arr.length) {
    return [];
  }
  let element = arr[0];
  let sameElement = 1;
  let result = [element];

  for (let i = 1; i < arr.length; i++) {
    if (element === arr[i]) {
      ++sameElement;
      if (sameElement <= 1) {
        result.push(arr[i]);
      }
    } else {
      element = arr[i];
      sameElement = 1;
      result.push(arr[i]);
    }
  }
  return result;
}
