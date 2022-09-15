const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
let [moo] = farmAnimals.split(' ');
console.log(moo)
let [,neigh] = farmAnimals.split(' ');
console.log(neigh);
let [,,baa] = 
farmAnimals.split(' ');
console.log(baa);
let [,,,oink] = farmAnimals.split(' ');
console.log(oink);
let [,,,,cluck] = 
farmAnimals.split(' ');
console.log(cluck);

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
let [bessie] = farmAnimals.split(' ');
console.log(bessie)
let [,,dolly] = farmAnimals.split(' ');
console.log(dolly);
let [,,,babe] = farmAnimals.split(' ');
console.log(babe);
let [,,,,little] = farmAnimals.split(' ');
console.log(little);

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
let [blackAndWhite] = farmAnimals.split(' ');
console.log(blackAndWhite)
let [,,black] = farmAnimals.split(' ');
console.log(black);
let [,,,pink] = farmAnimals.split(' ');
console.log(pink);

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
let [red, orange, yellow, green, blue, indigo, violet] = colors
console.log(red)
console.log(orange)
console.log(yellow)
console.log(green)
console.log(blue)
console.log(indigo)
console.log(violet)

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
let [r, o, y, g,b,v] = [red, orange, yellow, green, blue, violet]
console.log(r)
console.log(o)
console.log(y)
console.log(g)
console.log(b)
console.log(v)

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
let [indg] = [indigo]
console.log(indg)

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const anObject = {muppetName: "Miss Piggy",color: "pink",song: "Never Before, Never Again",job: "Cast member of The Muppet Show",partner: "Kermit"}
const {muppetName, color,song,job,partner} = anObject
console.log(anObject)
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
// const nestedMuppet = {
//   nestedName: 'Kermit',
//   nestedColor: 'green',
//   album: {
//     theMuppetMovie: {
//       song1: 'Rainbow Connection',
//       song2: 'Moving Right Along',
//       song3: 'Never Before, Never Again',
//       song4: 'I Hope That Something Better Comes Along',
//     },
//   },
//   nestedJob: 'Host of The Muppet Show',
//   nestedPartner: 'Miss Piggy'
// };
const {song2, song4} = nestedMuppet.album.theMuppetMovie;
console.log(song2)
console.log(song4)
const {nestedJob} = nestedMuppet;
console.log(nestedJob)
const {nestedPartner} = nestedMuppet;
console.log(nestedPartner)



