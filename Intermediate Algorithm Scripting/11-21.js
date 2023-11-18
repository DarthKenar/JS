function convertHTML(str) {
    let coversion = [
      ["&","&amp;"],
      ["<","&lt;"],
      [">","&gt;"],
      ['"',"&quot;"],
      ["'","&apos;"],
      ["<","&lt;"]
    ];
    for(let i=0; i<coversion.length; i++){
      str = str.replaceAll(coversion[i][0],coversion[i][1])
    };
    return str
  };
  
  convertHTML("Dolce & Gabbana");