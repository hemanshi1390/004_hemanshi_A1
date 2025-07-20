function toUpperCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  return str.toUpperCase();
}

module.exports = toUpperCase;
