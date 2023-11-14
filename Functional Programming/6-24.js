// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(arr, bookName) {
  let newArr = [...arr]
  newArr.push(bookName);
  return newArr;

  // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove(arr, bookName) {
  let newArr = [...arr]
  const book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return newArr;

    // Cambia el código encima de esta línea
    }
}