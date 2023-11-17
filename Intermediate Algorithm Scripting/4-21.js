function whatIsInAName(collection, source) {
    let respuesta = collection.filter(function (e) {
        for(let clave in source){
            if (e.hasOwnProperty(clave)){
                if (!(e[clave] == source[clave])){
                    return false
                };
            }else{
                return false
            };
        };
    return true
    })
    return(respuesta)
};

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });