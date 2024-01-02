const marvel_heros = ["thor","Ironman","spiderman"];
const dc_heros = ["superman","batman","flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);

const allHero=marvel_heros.concat(dc_heros);
// console.log(allHero);

const all_new_hero = [...marvel_heros,...dc_heros]
// console.log(all_new_hero);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array)
console.log(Array.isArray("aman"));
console.log(Array.from("aman"));
console.log(Array.from({name: "aman"}));//intersting

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1,s2,s3));