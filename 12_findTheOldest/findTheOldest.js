const findTheOldest = function(people) {
  let alive = people.filter((person) => person.yearOfDeath === undefined)
  console.log(alive)
  if (alive.length >= 1) {
    let oldAlive = alive.map((person) => person.yearOfBirth)
    let oldestAlive = Math.max.apply(null, oldAlive)
    let oldestIndex = oldAlive.indexOf(oldestAlive)
    return alive[oldestIndex]
  } else {
  let born = people.map((person) => person.yearOfBirth)
  let die = people.map((person) => person.yearOfDeath)
  let x = []
  for(var i = 0;i<=born.length-1;i++)
  x.push(die[i] - born[i]);
  let oldest = Math.max.apply(null, x)
  let oldIndex = x.indexOf(oldest)
  return people[oldIndex]}
};

// Do not edit below this line
module.exports = findTheOldest;
