//O'zgaruvchi turlari ? 5
/*
1. let const ni farqi ? 5
2. var let farqi ? 0
3. Data types asosiy nechi xil turga bolinadi ? 4
4. Primitiv va No-primitiv (refrence) farqi 3?
5. Accses before intilization 0 ?
6. Type conversion  haqida malumot bering 0?
7. Type conversion necha xil usuli bor 0?
8. Avtomatik type conversion haqida malumot bering 0?
9. Math objecti haqida malumot bering 3?
10. Truhy and falsy qiymatlarini sanab bering 0 ?
11. If else haqida malumo bering 5?
12. Switch case haqida malumot bering 4?
13. Nechi xil asosiy functionlar bor 0?
14. Functionlarni bir biridan farqi 0?
15. Functionda return ishlashi 0 ?
16. IIFE haqida malumot bering 0?
17. Method nima 0?
18. Stringni split malumot bering 0?
19. Loop nima 1?
20. Loop turlari 0?
21. do while while loopini farqi 2 ?
22. for in for of farqi 0?
23. Assigment operatorlarni sanab bering 4?
24. == === farqi 5 ?
25. ! operatori haqida  0?
26. Array method concat 5 ?
27. Array method reverce 5 ?
28. Array method splice 0 ?
29. Array method foreach 0?
30. Array foreach methodni boshqa methodalrdan farqi 0?
31. Arrayni map methodi 0?
32. Arrayni some methodi haqida malumot bering 0?
33. Arrayni every methodi haqida malumot bering  0?
34. Arrayni find methodi haqida malumot bering  4?
35. Arrayni reduce methodi haqida malumot bering 0 ?




 













*/

// const a = {
//   name: "Davron",
// };

// a.name = "Ali";
// console.log(a);

// console.log(typeof typeof NaN);

let obj = {
  name: "Fotima",

  location: {
    city: "Tashkent",
    country: "Uzbekistan",
  },
};

let obj2 = JSON.parse(JSON.stringify(obj));

obj2.name = "Ali";
obj2.location.city = "Qashqadaryo";

console.log(obj);
console.log(obj2);

// console.log(name);
// let name = "Olim";
// console.log(name);

// console.log(1 + "1");

// console.log(1 - "1");

// Number("12324564")
// String()
// Boolean()

// console.log(Math.pow(3,2));

// function a() {
//   console.log("salom");
//   return "12", 12;
//   console.log();
// }
// console.log(a());

// (function () {
//   console.log("salom IIFE");
// })()

// let obj3 = {
//   hello: function () {
//     return "salom";
//   },
// };

// obj3.hello();

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let a = 22;
let b = 23;

// a += b;
// let j = a + b;
a += b;
// a = a+b
let arr = [1, 2, 3, 4, 5];
arr.forEach((value, idx, arr) => {});

console.log((2 >= 4 || 5 !== 5) && (!"1" || ""));
