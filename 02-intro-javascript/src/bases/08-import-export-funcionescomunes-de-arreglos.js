import { heroes } from "../data/heroes";

console.log(heroes);

const heroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

console.log(heroeById(3));

const heroesByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

console.log(heroesByOwner("Marvel"));
console.log(heroesByOwner("DC"));