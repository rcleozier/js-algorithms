function bubbleSort(items) {
  var length = items.length -1;
  var sorted = false;

  while(!sorted) {
    var swaps = 0;
    for (var i = 0; i < length; i++) {
      if (items[i] > items[i+1]) {
        var temp = items[i];

        items[i] = items[i+1];
        items[i+1] = temp;
        swaps++;
      }
    }
    length = length - 1;

    if (length == 0 || swaps == 0) {
      sorted = true;
    }
  }

  return items;
};
