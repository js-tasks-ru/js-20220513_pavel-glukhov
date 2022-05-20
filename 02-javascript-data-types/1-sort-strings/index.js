/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} [arr=[]] arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = `asc`) {
  return [...arr].sort((a, b) => compare(a, b, param === `desc` ? -1 : 1));
}

function compare(x, y, order) {
  return order * x.localeCompare(y, `ru`, { caseFirst: `upper` });
}
