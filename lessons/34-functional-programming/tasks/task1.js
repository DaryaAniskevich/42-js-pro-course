const createValidation = (...validators) => {
  return (showFinalResult = (valueForChecking) => {
    let finalMessage = [];

    for (let i = 0; i < validators.length; i++) {
      const functionForChecking = validators[i];
      const resultOfChecking = functionForChecking(valueForChecking);
      if (resultOfChecking) {
        finalMessage.push(resultOfChecking);
      }
    }

    if (finalMessage.length > 0) {
      return finalMessage;
    } else {
      return null;
    }
  });
};

const createValidator = (checkingFunction, errorMessage) => {
  return (showResultOfChecking = (valueForChecking) => {
    if (checkingFunction(valueForChecking)) {
      return null;
    } else {
      return errorMessage;
    }
  });
};

const hasEmail = (email) => {
  return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
    email
  );
};

const hasNoEmpty = (email) => {
  return email.trim();
};

const hasAdult = (age) => {
  return age >= 18;
};

module.exports = {
  createValidation,
  createValidator,
  hasEmail,
  hasNoEmpty,
  hasAdult,
};
