function findLongestWordLength(str) {
    var longestword = "";
    while (str.length > 0) {
      var possible_longestword;
      if (str.indexOf(" ") !== -1) {
        possible_longestword = str.slice(0, str.indexOf(" "));
        str = str.slice(str.indexOf(" ") + 1);
      } else {
        possible_longestword = str;
        str = "";
      }
      if (possible_longestword.length > longestword.length) {
        longestword = possible_longestword;
      }
    }
    return longestword.length;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));