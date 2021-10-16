class Pokemon {
  id;
  name;
  imgSrc;
  type;
  hp;
  attack;
  defense;
  speed;
  constructor(id, name, imgSrc, type, hp, attack, defense, speed) {
    this.id = id;
    this.name = name;
    this.imgSrc = imgSrc;
    this.type = type;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
  }
}
export default Pokemon;
