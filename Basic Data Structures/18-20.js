const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Cambia solo el código debajo de esta línea
    var counter = 0;
    for (const user in allUsers){
      console.log(user)
      if (allUsers[user].online){
        counter += 1;
      };
    };
    return counter
    // Cambia solo el código encima de esta línea
  }
  
  console.log(countOnline(users));