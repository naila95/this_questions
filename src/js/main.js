// Question 1

const person = {
  age: 30,
  getAge: function () {
    console.log(this.age);
  },
  getAge2: () => {
    console.log(this.age);
  },

  //   arrow f oldugu ucun globala refer edir orda age tapmadigi ucun undefined qaytarir
};

// person.getAge();
// person.getAge2();

// Question 2

const car = {
  brand: "Bmw",
  wheel: 4,
  colors: ["black", "white", "red"],
  getColors() {
    this.colors.forEach(function (color) {
      console.log(this.wheel, color);
    });
  },
};

// car.getColors();

// Yuxaridaki problemi hell etmeyin 2 yolu var:

const car2 = {
  brand: "Bmw",
  wheel: 4,
  colors: ["black", "white", "red"],
  getColors() {
    this.colors.forEach((color) => {
      console.log(this.wheel, color);
    });
  },
};

// car2.getColors();

const car3 = {
  brand: "Bmw",
  wheel: 4,
  colors: ["black", "white", "red"],
  getColors() {
    this.colors.forEach(function (color) {
      console.log(this.wheel, color);
    }, this);
  },
};

// car3.getColors();

// Question 3

let obj = {
  language: "Javascript",
  getLang() {
    console.log(this.language);
  },
};

// obj.getLang();

const getLang2 = obj.getLang;

// getLang2();

// Helli:

const getLang3 = obj.getLang.bind(obj);

// getLang3();

// Question 4

function sum(b) {
  console.log(this.a + b);
}

sum(5);

// helli:

const newSum = sum.bind({ a: 7 });

newSum(3);
