function findShortestWord(s){
  words = s.split(" ");
  shortest = words[0].length;
  words.forEach(function(word) {
    if (word.length < shortest) {
      shortest = word.length;
    }
  });

  return shortest;
}
