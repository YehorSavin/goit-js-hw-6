import users from "./users.js"

const getUserNames = user => {
    const result = users.map(user => user.name);
    return result;
  }
  
  console.log(getUserNames(users));