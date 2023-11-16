// Cambia solo el código debajo de esta línea
function urlSlug(title) {
    let arrTitle = title.split(" ").map((str) => str.toLowerCase())
    let str = arrTitle.join("-")
    return str
  }
  // Cambia solo el código encima de esta línea
  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");