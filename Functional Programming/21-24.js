// Cambia solo el código debajo de esta línea
function urlSlug(title) {
  let arrTitle = title.split(/['" ]/).map((str) => str.toLowerCase())
  let arrFiltered = arrTitle.filter((str) => str != "")
  let str = arrFiltered.join("-")
  return str
}
// Cambia solo el código encima de esta línea
urlSlug(" Winter Is  Coming")