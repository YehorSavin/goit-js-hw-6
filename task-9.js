import users from "./users.js"

const getNamesSortedByFriendsCount = users => {
  const result = users.sort((a, b) => a.friends.length - b.friends.length);
  return result
};

 console.log(getNamesSortedByFriendsCount(users));