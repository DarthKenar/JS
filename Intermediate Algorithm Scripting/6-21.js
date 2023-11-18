function translatePigLatin(str) {
    let vocals = ["a","e","i","o","u"]
    if (vocals.includes(str[0])){
      return str.concat("way")
    }else{
      for(let i = 1; i < str.length; i++){
        if (vocals.includes(str[i])){
          return str.slice(i).concat(str.slice(0,i)).concat("ay")
        };
      };
      return str.concat("ay")
    };
  };
  translatePigLatin("california")
  translatePigLatin("paragraphs")
  translatePigLatin("glove")
  translatePigLatin("algorithm")
  translatePigLatin("eight")
  translatePigLatin("schwartz")
  translatePigLatin("rhythm")