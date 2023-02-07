const verifyRequiredField = (str) => {
  return !!str.trim();
};

const verifyFirstLetter = (str) => {
  const firstChar = str.trim()[0];

  if (!firstChar) {
    return false;
  }

  return firstChar === firstChar.toUpperCase();
};

const verifyMaxLength = (str, maxLength) => {
  return str.length <= maxLength;
};

const verifyWebsite = (str) => {
  return str.startsWith("https://");
};

export {
  verifyFirstLetter,
  verifyRequiredField,
  verifyMaxLength,
  verifyWebsite,
};
