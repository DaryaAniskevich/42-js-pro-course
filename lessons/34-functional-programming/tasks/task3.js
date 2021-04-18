const compose = (...funcs) => (value) =>
  funcs.reduce((acc, func) => func(acc), value);
const withProps = (func) => (value) => {
  return { ...func(value) };
};
const branch = (condition, func1, func2) => (value) => {
  if (condition(value)) {
    return func1(value);
  } else {
    return func2(value);
  }
};

module.exports = {
  compose,
  withProps,
  branch,
};
