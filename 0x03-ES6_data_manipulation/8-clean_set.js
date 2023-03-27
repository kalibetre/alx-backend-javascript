/**
 * return a string of all elements of the set starting with startString
 * separated by -
 * @param {Set} set
 * @param {String} startString
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  if (startString === '') return '';
  let filtered = [...set].filter((value) => value.startsWith(startString));
  filtered = filtered.map((value) => value.replace(startString, ''));
  return filtered.join('-');
}
