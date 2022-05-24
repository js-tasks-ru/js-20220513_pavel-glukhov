/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  return (obj) => {
    let arr = path.split(`.`);
    let i = 0;
    let value = obj[arr[i]];
    while (value && i++ < arr.length - 1) {
      obj = value;
      ++i;
      value = obj[arr[i]];
    }
    return value;
  };
}
