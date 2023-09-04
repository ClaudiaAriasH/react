import heroes, {owners} from "../data/heroes";


// console.log(heroes, owners);

export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

console.log(getHeroeById(3));

const heroesByOwner = (owner) => {
  return heroes.filter((heroe) => heroe.ownaer === owner);
};

console.log(heroesByOwner("Marvel"));
console.log(heroesByOwner("DC"));