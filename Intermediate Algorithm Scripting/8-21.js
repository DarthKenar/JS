function pairElement(str) {
    let pairs = "--CGAT"
  //let pairs = "012345"
    let adn = []
    for(let i=0; i<str.length; i++){
        let pairIndex = pairs.indexOf(str[i])
        if(pairIndex%2 == 0){
            adn.push([pairs[pairIndex],pairs[pairIndex+1]])
        }else{
            adn.push([pairs[pairIndex],pairs[pairIndex-1]])
        }
    };
    return adn
}

pairElement("GCG");