function linearSearch(items, search) {
  var len = items.length;

  if (len === 0 || search === '') {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (items[i] === search) {
      return i;
    }
  }

  return false;
}
