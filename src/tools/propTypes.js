export const typedArrayOfLength = (expectedType, expectedLength, propValue, key, componentName, location, propFullName) => {
  const propLength = propValue[key].length;
  if (propLength !== expectedLength) {
    return new Error(`Invalid array length ${propLength} (expected ${expectedLength}) for prop ${propFullName} supplied to ${componentName}.`);
  }

  for (let i in propValue[key]) {
    const elemType = typeof propValue[key][i];
    if (elemType !== expectedType) {
      return new Error(`Invalid array element type ${elemType} (expected ${expectedType}) for prop ${propFullName} supplied to ${componentName}.`);
    }
  }
};
