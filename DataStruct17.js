let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function countOnline(usersObj) {
	// change code below this line
    let result = 0;
    for (let user in usersObj){
      if (usersObj[user].online === true){
        result++;
      }
    }
    return result;
	// change code above this line
  }
  
  console.log(countOnline(users));