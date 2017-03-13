function swap(items, min, max) {
  var temp = items[min];

  items[min] = items[max];
  items[max] = temp;
}

function selectionSort() {
  for (var i = 0; i < items.length; i++) {
    var min = i;

    for(var j = i + 1; j < items.length; j++) {
      if (items[j] < items[min] ) {
        min = j;
      }
    }
  }

  if (i != min ) {
    swap(items, i, min);
  }

  return items;
}
