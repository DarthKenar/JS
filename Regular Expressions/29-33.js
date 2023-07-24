let sampleWord = "astronaut";
let pwRegex = /(?=.*\d{2})(?=.{6,})/;
let result = pwRegex.test(sampleWord);
