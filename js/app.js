// construktor funksiyaga oid misolar:
// N1:
function Cars(name, color, horsepower) {
    this.name = name;
    this.color = color;
    this.horsepower = horsepower
}

let res1Construk1 = new Cars("BMW", "Black", 700)
let res1Construk2 = new Cars("Tesla", "White", 500)
console.log(res1Construk1, res1Construk2);

// N2:
function Fruits(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price
}

let res2Construk1 = new Fruits("Apple", "Green", "50$")
let res2Construk2 = new Fruits("Banana", "Yellow", "80$")
console.log(res2Construk1, res2Construk2);

// N3:
function Animals(name, location, meal) {
    this.name = name;
    this.location = location;
    this.meal = meal
}

let res3Construk1 = new Animals("Bear", "Forest", "Honey")
let res3Construk2 = new Animals("Eagle", "Mountain", "Meat")
console.log(res3Construk1, res3Construk2);

// N4:
function Weather(name, condition, time) {
    this.name = name;
    this.condition = condition;
    this.time = time
}

let res4Construk1 = new Weather("Sunny", "Hot", "in the morning")
let res4Construk2 = new Weather("Rain", "light rain", "at lunch")
console.log(res4Construk1, res4Construk2);

// N5:
function Noutbuk(name, memory, battery) {
    this.name = name;
    this.memory = memory;
    this.battery = battery
}

let res5Construk1 = new Noutbuk("hp", "16 GB LPDDR4x RAM", "52 WHr ")
let res5Construk2 = new Noutbuk("Lenovo", "4 GB LPDDR4x RAM", "20 WHr")
console.log(res5Construk1, res5Construk2);

// Class ga oid misolar:
// N1:
class CarsClass {
    constructor(name, color, horsepower) {
        this.name = name;
        this.color = color;
        this.horsepower = horsepower
    }
}

let res1Class1 = new CarsClass("BMW", "Black", 700)
let res1Class2 = new CarsClass("Tesla", "White", 500)
console.log(res1Class1, res1Class2);

// N2:
class FruitsClass {
    constructor(name, color, price) {
        this.name = name;
        this.color = color;
        this.price = price
    }
}


let res2Class1 = new FruitsClass("Apple", "Green", "50$")
let res2Class2 = new FruitsClass("Banana", "Yellow", "80$")
console.log(res2Class1, res2Class2);

// N3:
class AnimalsClass {
    constructor(name, location, meal) {
        this.name = name;
        this.location = location;
        this.meal = meal
    }
}

let res3Class1 = new AnimalsClass("Bear", "Forest", "Honey")
let res3Class2 = new AnimalsClass("Eagle", "Mountain", "Meat")
console.log(res3Class1, res3Class2);

// N4:
class WeatherClass {
    constructor(name, condition, time) {
        this.name = name;
        this.condition = condition;
        this.time = time
    }
}

let res4Class1 = new WeatherClass("Sunny", "Hot", "in the morning")
let res4Class2 = new WeatherClass("Rain", "light rain", "at lunch")
console.log(res4Class1, res4Class2);

// N5:
class NoutbukClass {
    constructor(name, memory, battery) {
        this.name = name;
        this.memory = memory;
        this.battery = battery
    }
}

let res5Class1 = new NoutbukClass("hp", "16 GB LPDDR4x RAM", "52 WHr ")
let res5Class2 = new NoutbukClass("Lenovo", "4 GB LPDDR4x RAM", "20 WHr")
console.log(res5Class1, res5Class2);

// Massiv va obyektlarga oid:
// N1:
const num1Object = [
    { ism: "Ali", yosh: 17 },
    { ism: "O'ktam", yosh: 18 },
    { ism: "Sardor", yosh: 19 }
];
console.log(num1Object);

// N2:
const num2Object = [
    { nom: "Olma", narx: 100 },
    { nom: "Nok", narx: 150 },
    { nom: "Banan", narx: 200 }
];

function resultNum2OBject(resNum2Object) {
    const resultNum2object = resNum2Object.map(num2Object => {
        return {
            nom: num2Object.nom,
            narx: num2Object.narx * 1.2
        };
    });
    return resultNum2object;
}

const resNum2ObjectLog = resultNum2OBject(num2Object);
console.log(resNum2ObjectLog);

// N3:
const num3Object = [
    { ism: "Dilorom", yosh: 20 },
    { ism: "Shahrizoda", yosh: 17 },
    { ism: "Akbar", yosh: 19 }
];

function resultNum3Object(resNum3) {
    const resNum3Object = resNum3.filter(num3Object => {
        return num3Object.yosh >= 18
    })
    return resNum3Object
}
const resNum3ObjectLog = resultNum3Object(num3Object)
console.log(resNum3ObjectLog);

// N4:
const num4Object = [
    { nom: "Kitob A", muallif: "Said Ahmad" },
    { nom: "Kitob B", muallif: "Zokir Khoshimov" },
    { nom: "Kitob C", muallif: "Murodjon Abduqodirov" }
];

function resultNum4Object(resNum4) {
    const ResNum4Obj = num4Object[0].muallif
    const ResNum4Object = resNum4.map(num4Object => {
        return {
            nom: num4Object.nom,
            muallif: ResNum4Obj
        }
    });
    return ResNum4Object
}
console.log(resultNum4Object(num4Object));

// N5:
const num5Object = [
    { ism: "Rashid", ishHaqi: 3000 },
    { ism: "Dilshod", ishHaqi: 2500 },
    { ism: "Farhod", ishHaqi: 4000 }
];

function resultNum5Object(resNum5) {
    const resultNum5Obj = resNum5.map(num5Object => {
        return {
            ism: num5Object.ism,
            ishHaqi: Math.trunc(num5Object.ishHaqi * 1.1)
        }
    })
    return resultNum5Obj
}

console.log(resultNum5Object(num5Object));

// N6:
const num6Object = [
    { ism: "Jasur", yosh: 21 },
    { ism: "Sardorbek", yosh: 22 },
    { ism: "Azizbek", yosh: 20 }
];

function resultNum6Object(resNum6Obj) {
    const resNum6Object = resNum6Obj.map(num6Object => {
        return {
            ism: "Mrs." + num6Object.ism,
            yosh: num6Object.yosh
        }
    })
    return resNum6Object
}
console.log(resultNum6Object(num6Object));

// N7:
const num7Object = [
    { nom: "Tesla", tur: "elektr" },
    { nom: "Toyota", tur: "benzin" },
    { nom: "Nissan Leaf", tur: "elektr" }
];

function resNum7Object(resNum7Obj) {
    const resNum7Object = resNum7Obj.filter(num7Object => {
        return num7Object.tur == "elektr"
    })
    return resNum7Object
}
console.log(resNum7Object(num7Object));

// N8:
const num8Object = [
    { ism: "Aziz", email: "aziz@example.com" },
    { ism: "Nodir", email: "nodir@example.com" },
    { ism: "Malika", email: "malika@example.com" }
];

function resNum8Object(resNum8Obj) {
    const resNum8Object = resNum8Obj.map(num8Object => {
        return {
            ism: num8Object.ism,
            email: num8Object.email
        }
    })
    return resNum8Object
}
console.log(resNum8Object(num8Object));

// N9:
const num9Object = [
    { nom: "Televizor", narx: 500 },
    { nom: "Konditsioner", narx: 700 },
    { nom: "Butler", narx: 300 }
];

function resNum9Object(resNum9Obj) {
    let theLargeNum9Object = resNum9Obj[0].narx
    for (let i = 1; i < resNum9Obj.length; i++) {
        if (resNum9Obj[i].narx > theLargeNum9Object) {
            theLargeNum9Object = resNum9Obj[i].narx
        }
    }
    return theLargeNum9Object
}
console.log(resNum9Object(num9Object));

// N10:
const num10Object = [
    { ism: "Zarina", ball: 85 },
    { ism: "Doston", ball: 90 },
    { ism: "Gulbahor", ball: 95 }
];

function resNum10Object(resNum10Obj) {
    let mainSumNum10 = 0
    for (const res10Obj of resNum10Obj) {
        mainSumNum10 += res10Obj.ball
    }
    let mainLengthNum10 = mainSumNum10 / resNum10Obj.length
    for (const resObjNum10 of resNum10Obj) {
        resObjNum10.ball = mainLengthNum10
    }
    return resNum10Obj
}
console.log(resNum10Object(num10Object));

// String metodiga oid masalalar:
// N1:
let num1String = "HELLO WORLD";

function resNum1String(resNum1) {
    return resNum1.toLowerCase()
}
console.log(resNum1String(num1String));

// N2:
let num2String = "HELLO WORLD";

function resNum2String(resNum2) {
    return resNum2.length
}
console.log(resNum2String(num2String));

// N3:
let num3String = "world";

function resNum3String(resNum3) {
    return "Hello" + " " + resNum3 + "!"
}
console.log(resNum3String(num3String));

// N4:
let num4String = "This is a very long string";

function resNum4String(resNum4) {
    return resNum4.substring(0, 10);
}

console.log(resNum4String(num4String));

// N5:
let num5String = "Akam Anvar ajoyib asarlar yaratadi, ammo ayrim damlarda asrab-avaylashni unutadi, axir har bir asar alohida ahamiyatga ega!";

function resNum5String(resNum5) {
    let resultNum5String = resNum5.toLowerCase()
    return resultNum5String.replaceAll("a", "o")
}

console.log(resNum5String(num5String));

// N6:
let num6String = "This is a very long string";

function resNum6String(resNum6) {
    return resNum6.charAt(5)
}

console.log(resNum6String(num6String));

// N7:
let num7String = "JavaScript – bu veb-sahifalarda dinamik kontent yaratish uchun keng qo‘llaniladigan kuchli dasturlash tili.";

function resNum7String(resNum7) {
    return resNum7.includes("JavaScript")
}

console.log(resNum7String(num7String));