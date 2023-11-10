let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }   
  };
  
  function isEveryoneHere(userObj) {
    // Cambia solo el código debajo de esta línea
    let names = ["Alan","Jeff","Sarah","Ryan"];
  
    for(let i = 0; i < names.length; i++){
      if (!(names[i] in userObj)){
        return false
      };
    };
    return true
    // Cambia solo el código encima de esta línea
  }
  
  console.log(isEveryoneHere(users));