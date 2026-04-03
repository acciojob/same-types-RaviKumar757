function isSameType(value1, value2) {
  // handle NaN case
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // if one is NaN and other is not
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return false;
  }

  // check normal types
  return typeof value1 === typeof value2;
}