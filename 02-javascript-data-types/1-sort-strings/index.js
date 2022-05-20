/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} [arr=[]] arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = `asc`) {
  //let sorted = [...arr].sort((a, b) => compare(a, b));
  return param === `desc`
    ? [...arr].sort((a, b) => descCompare(a, b))
    : [...arr].sort((a, b) => ascCompare(a, b));
}

function ascCompare(x, y) {
  return x.localeCompare(y, `ru`, { caseFirst: `upper` });
}

function descCompare(x, y) {
  return -x.localeCompare(y, `ru`, { caseFirst: `upper` });
}
