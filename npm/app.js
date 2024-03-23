import generateName from "sillyname"; 
import superheroes from "superheroes";

// generating sillyname
const sillyName = generateName();
console.log(`My name is ${sillyName}`);

// generating superhero name
const superHeroName = superheroes.random();
console.log(`I am ${superHeroName}!`);