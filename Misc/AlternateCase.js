function alternateCase(s) {
  var alt = '';
  s = s.split('');

  for(var i = 0; i < s.length; i++) {
    var aci = s[i].charCodeAt(0);

    if (aci > 90) {
      alt += s[i].toUpperCase();
    } else {
      alt += s[i].toLowerCase();
    }
  }

  return alt;
}
