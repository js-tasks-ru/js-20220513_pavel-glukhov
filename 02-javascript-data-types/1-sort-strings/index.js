/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  if (param === 'asc') {
    return arr.sort((a, b) => compare(a, b));
  } else {
    return arr.sort((a, b) => compare(a, b)).reverse();
  }
}

function compare(a, b) {
  if (a.localeCompare(b) && !a.toLowerCase().localeCompare(b.toLowerCase())) {
    return -1;
  } else {
    return a.localeCompare(b);
  }
}
