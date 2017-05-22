function binarySearch(items, search) {
  var startIndex = 0;
  var stopIndex = items.length - 1;
  var mid = Math.floor((stopIndex + startIndex)/2);
  var currentIndex;
  var currentElement;

  while (startIndex <= stopIndex) {
    currentIndex = (startIndex + stopIndex) / 2 | 0;
    currentElement = items[currentIndex];

    if (currentElement < search) {
      startIndex = currentIndex + 1;
    } else if (currentElement > search) {
      stopIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }

  return -1;
}
