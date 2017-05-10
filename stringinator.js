const _ = require('./underbar');

const first = function(str, n = 1) {
  return _.first(str, n)
};

const last = function(str, n = 1) {
  return _.last(str, n)
};

const removeChar = function(str, target) {
  // hint: use _.reject
  return _.reject(str, item => { if (item === target) { return item }}).join('');
};

const hasChar = function(str, target) {
  // hint: use _.some
  return _.some(str, item => { if (item === target) { return item }});
};

const isDigit = function(val){ return !isNaN(parseInt(val)) }

const isOnlyDigits = function(str) {
  return _.every(str, isDigit)
};

const filterToOnlyDigits = function(str) {
  return _.filter(str, isDigit).join('')
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  return _.map(obj, function(item, key, obj) {
    return truncateString(obj[key], maxLength);
  });
};

const countChars = function(str) {
  return _.reduce(str, function(obj, char) {
    if (char in obj){
      obj[char]++;
    } else {
      obj[char] = 1;
    };
    return obj;
  }, {});
};

const dedup = function(str) {
  return _.uniq(str).join('')
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};