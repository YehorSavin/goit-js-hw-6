import users from "./users.js"

const getSortedUniqueSkills = users => {
  return users.reduce((array, user) => {
    array.push(...user.skills)
    return array
  }, []).filter((elem, index, array) => index === array.indexOf(elem)).sort();
};

console.log(getSortedUniqueSkills(users));
