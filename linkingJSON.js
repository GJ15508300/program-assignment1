console.log("LINKING JASON FILE TO JS");
//<link rel="JSON" href="json_examole.json"></link>

const text = '{"name":"GJ", "birth":"1997-07-20", "city":"salem"}';


const obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
console.log(obj.name);

const text1 = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj1 = JSON.parse(text1);
obj.age = eval("(" + obj1.age + ")");

//console.log(obj1.name , obj1.age());


const obj2 = {name: "John", age: 30, city: "New York", "cars":["Ford", "BMW", "Fiat"]};
const myJSON = JSON.stringify(obj2);
console.log(myJSON);
const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON1 = JSON.stringify(arr);
console.log(myJSON1);

// Storing data:
//localStorage.setItem("testJSON", myJSON);

// Retrieving data:
//let text2 = localStorage.getItem("testJSON");
//let obj3 = JSON.parse(text2);
//console.log(obj3.name);
console.log("ACCESSING OBJECT");
console.log(obj.name);
console.log("ASSESSING ARRAY");
console.log(obj2.cars[1]);

let demo = "";
for (let i = 0; i < obj2.cars.length; i++) {
  demo += obj2.cars[i] + ", ";
}
console.log(demo);