import users from "./users.js"

const getUsersWithFriend = (users, friendName) => {
  const result = users.filter(user => user.friends.includes(friendName)).map(user => user.name);
  return result
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry')); 