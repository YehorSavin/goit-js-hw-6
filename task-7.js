import users from "./users.js"

const calculateTotalBalance = users => {
  const result = users.reduce((total, user) =>  total + user.balance , 0);
  return result
};

console.log(calculateTotalBalance(users));