// :)
const smartSearch = (array, value) => array.includes(value);
const randomSearch = (array) => array[Math.floor(Math.random() * array.length)];

module.exports = {
  smartSearch,
  randomSearch,
};
