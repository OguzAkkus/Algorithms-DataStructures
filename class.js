//reference type
var object1 = { value: 10};
var object2 = object1;
var object3 = { value:10 };

//context vs scope
const object4 = {
  a: function() {
    console.log(this);
  }
}

//instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`Im a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healler');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

wizard1.play()
wizard2.play()
wizard1.introduce()