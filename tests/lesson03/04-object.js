const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
};
console.log(car['year']);

///////////////////////////
const person = {
    name: 'Nhat Ha',
    address: {
        country: 'Viet Nam',
        city:'Ha Noi', 
        street: 'Duong Quang Ham' 
    }
};
console.log(person.address.street);

//////////////
const student = {
    name: 'Thanh Binh',
    grades: {
        math: 10,
        english: 8,
    }
};
console.log(student['grades']['math']);
///////////

const setting = {
    volume: 'Low',
    brightness: 'Medium',
};
setting.brightness = 'High';
setting.volume = 'Medium';
console.log(setting.volume);
console.log(setting.brightness);

//////////////
let bike = {
    make: 'Honda',
    model: 'Vision-sport-2025',
};

bike.color = 'Black-Red';
bike['price'] = 50000000;
console.log(bike.color);

///////////////

let employee = {
    name: 'Lam Dieu',
    age: 26,
    sex: 'F',
};
console.log(employee);

delete employee.age;

console.log(employee);

/////////////
let school = {classA:['An','Bình','Châu'], classB:['Đào','Hương','Giang']};
console.log(school);
