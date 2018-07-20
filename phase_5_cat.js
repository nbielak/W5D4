function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`;
};

Cat.prototype.cuteStatement = function() {
  return `Everyone loves ${this.name}`;
};

Cat.prototype.meow = function() {
  return 'meow';
};

const cat1 = new Cat('cat1', 'owner1');
const cat2 = new Cat('cat2', 'owner2');

cat1.meow = function() {
  return 'meow meow';
};

console.log(cat1.meow());
console.log(cat2.meow());
