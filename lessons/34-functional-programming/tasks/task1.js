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
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
};

const hasNoEmpty = (email) => {
  if (email.trim() === "") {
    return false;
  } else {
    return true;
  }
};

const hasAdult = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  createValidation,
  createValidator,
  hasEmail,
  hasNoEmpty,
  hasAdult,
};
