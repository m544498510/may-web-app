export const digitalUnits = {
  B: {
    name: 'B',
    toAnchor: 1
  },
  K: {
    name: 'K',
    toAnchor: 1024
  },
  M: {
    name: 'M',
    toAnchor: 1048576
  },
  G: {
    name: 'G',
    toAnchor: 1073741824
  },
  T: {
    name: 'T',
    toAnchor: 1099511627776
  }
};

/***
 * Automatically convert the source value to appropriate unit
 * @param {number} sourceValue - source value
 * @param {object} sourceUnit - must from digitalUnits
 * @param {number} fixed - toFixed number
 * @returns {*}
 */
export function unitConvertAuto(sourceValue, sourceUnit, fixed) {
  if (sourceValue === undefined || sourceValue === null) return sourceValue;
  
  const value = sourceValue * sourceUnit.toAnchor;
  
  if (value >= 1024 && value < 1048576) {
    
    return unitConvertByTarget(value, digitalUnits.B, digitalUnits.K, fixed);
  } else if (value >= 1048576 && value < 1073741824) {
    return unitConvertByTarget(value, digitalUnits.B, digitalUnits.M, fixed);
  } else if (value >= 1073741824 && value < 1099511627776) {
    return unitConvertByTarget(value, digitalUnits.B, digitalUnits.G, fixed);
  } else if (value >= 1099511627776) {
    return unitConvertByTarget(value, digitalUnits.B, digitalUnits.T, fixed);
  } else {
    return value + " " + digitalUnits.B.name;
  }
}

/***
 * convert the source value from source unit to target unit
 * @param sourceValue - source value
 * @param sourceUnit - must be the digitalUnits
 * @param targetUnit - must be the digitalUnits
 * @param fixed - toFixed number
 * @param withoutUnit - without unit will return a number
 */
export function unitConvertByTarget(
  sourceValue, sourceUnit, targetUnit, fixed = 1, withoutUnit) {
  if (sourceValue === undefined || sourceValue === null) return sourceValue;
  
  let tmp = (sourceValue * sourceUnit.toAnchor / targetUnit.toAnchor);
  tmp = Number(tmp.toFixed(fixed));
  if(!withoutUnit){
    tmp += " " + targetUnit.name;
  }
  return tmp;
}