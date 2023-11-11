var start = Date.now();
function titleCase(str) {
    var strResponse = "";
    var check = true;
    for(var i = 0; i < str.length; i++){
      if(str[i] == " "){
        check = true
        strResponse += str[i]
      }else{
        if (check == true){
          check = false
          strResponse += str[i].toUpperCase()
        }else{
          strResponse += str[i].toLowerCase()
        };
      };
      console.log(strResponse)
    };
    return strResponse
};
titleCase("i'm a little tea pot");
var end = Date.now();
console.log(start - end)

// Modern
var start = Date.now();
function titleCase(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

console.log(titleCase("i'm a little tea pot"));
var end = Date.now();
console.log(start - end)