//for in loop
person = {fname:"sudha", lname:"karan", age:20};
text = "";

for (x in person) {
  text += person[x];
}
console.log(text);
numbers = [45, 4, 9, 16, 25];
txt = "";
for (x in numbers) {
  txt += numbers[x];
}
console.log(txt);

//for of loop

cars = ["tata", "maruthi", "cooper"];
texx = "";
for (x of cars) {
    texx += x;
}
console.log(texx);