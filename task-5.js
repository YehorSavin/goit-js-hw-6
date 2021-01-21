import users from "./users.js"

const getUserWithEmail = (users, email) => {
  const result = users.find(user => user.email === email)
  return result
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 