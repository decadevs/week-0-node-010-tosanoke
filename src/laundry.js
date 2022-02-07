/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */

 function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  let countNoOfPairs = 0;
  let countsCleanPile = {};
  let countsDirtyPile = {};
  let result;

  //create object with count of occurrences for cleanpile
  cleanPile.forEach((x) => {
    countsCleanPile[x] = (countsCleanPile[x] || 0) + 1;
  });

  //create object with count of occurrences for dirtypile
  dirtyPile.forEach((y) => {
    countsDirtyPile[y] = (countsDirtyPile[y] || 0) + 1;
  });

  // check for other half of pair in dirty drawer
  for (const key in countsCleanPile) {
    let valueCP = countsCleanPile[key];
    if (valueCP % 2 == 1 && noOfWashes > 0) {
      if (countsDirtyPile.hasOwnProperty(key)) {
        countsDirtyPile[key] = countsDirtyPile[key] - 1;
        countNoOfPairs = countNoOfPairs + 1;
        noOfWashes = noOfWashes - 1;
      }
    }
  }

  // check for pairs in dirty drawers if noOfWashes is greater than 0
  if (noOfWashes > 0 && dirtyPile.length > 0) {
    for (const key in countsDirtyPile) {
      let value = countsDirtyPile[key];
      if ((value % 2 === 1) & (value > 1)) {
        let diff = value - 1;
        result = diff / 2;
        countNoOfPairs = countNoOfPairs + result;
        noOfWashes -= 1;
      }

      if (value % 2 == 0 && value > 0) {
        result = value / 2;
        if(result > noOfWashes){
          countNoOfPairs = noOfWashes/2
      }
      else {countNoOfPairs = countNoOfPairs + result;
          noOfWashes -= 1};

      }
    }
  }

  // check for pairs in clean drawer
  if (noOfWashes >= 0 && cleanPile.length > 0) {
    for (const key in countsCleanPile) {
      let value = countsCleanPile[key];
      if (value % 2 === 1 && value > 1) {
        let diff = value - 1;
        result = diff / 2;
        countNoOfPairs = countNoOfPairs + result;
      }
      if (value % 2 == 0 && value > 0) {
        result = value / 2;
        countNoOfPairs = countNoOfPairs + result;
      }
    }
  }

  return countNoOfPairs;
}



module.exports = getMaxPairs;
