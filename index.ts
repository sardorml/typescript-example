const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = [
  "raindrops on roses",
  "whiskers on kittens",
  "bright copper kettles",
  "warm woolen mittens",
];
const voters = [
  { name: "Alice", age: 42 },
  { name: "Bob", age: 77 },
];

function getLastItem<PlaceholderType>(
  array: PlaceholderType[]
): PlaceholderType {
  return array[array.length - 1];
}

/**
 * Mini-challenge: call `getLastItem` (and console.log the returned value)
 * on each of the 3 arrays above. Hover over different values to see what the Intellisense
 * says about the types for each one.
 */

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
