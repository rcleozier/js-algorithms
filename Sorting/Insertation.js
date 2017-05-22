function InsertationSort(items) {
  var len = items.length;
  var tmp, i, j;

  for (i = 0; i < len; i++) {
    var tmp = items[i]; //Copy of the current element.

    for (j=i-1; j > -1 && items[j] > tmp; j--) {
       items[j+1] = items[j];
    }

    items[j+1] = tmp;
  }

  return items;
}
