class Pokemon {
  id;
  name;
  imgSrc;
  types;
  hp;
  attack;
  defense;
  speed;
  color;
  typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };
  constructor(id, name, imgSrc, types, hp, attack, defense, speed, color) {
    this.id = id;
    this.name = name;
    this.imgSrc = imgSrc;
    this.types = types;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.color = this.typeColor[color];
  }
}
export default Pokemon;
