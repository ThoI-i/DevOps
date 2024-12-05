
// 우리집 강아지가 2마리 - 초코, 해피
let dogName1 = '초코';
let dogName2 = '해피';
let dogAge1 = 3;
let puppyAge2 = 5;
let tall1 = 30;
let height2 = 45;
let inject = false;
let inject2 = true;

let dog1 = ['초코', 3, 30, 10, 1, false, true];

// 객체
let myDog1 = {
  name: '초코', // 프로퍼티 (속성)
  age: 3,
  tall: 30,
  weight: 10,
  injection: false,
  vegiterian: true,
  favorites: ['산책', '간식'],
  bark: () => {
    console.log(`내 이름은 ${this.name}이야`);
    
  }
};

myDog1.bark();

[].push()

let myDog2 = {
  name: '해피',
  age: 5,
  tall: 45,
  weight: 12,
  injection: true,
  vegiterian: false
};

let myCat = {
  name: `나응`,
  age: 4,
  injection: true,
  favorites: [`낮잠`, `털뭉치`],
  'my hobby': `시비걸기`
}

// 객체 프로퍼티 접근하기
console.log(myDog1.name);
console.log(myCat.name);
console.log(myDog2.age);

console.log(typeof myCat);
console.log(typeof myCat.name);
console.log(typeof myCat.age);

// console.log(myCat.age++); // 숫자한테 ++
// console.log(myCat.favorites++); // 배열한테 ++?
// console.log(myDog1.name ** 2); // 스트링에 제곱??
// console.log(myDog1.favorites.push); // 배열에 새 데이터 추가
// console.log(myDog1.favorites) // 배열
// console.log(myDog1.favorites[0]) // 스트링

myCat.favorites.push(500);

myCat.favorites[1]++; // 문자열 X 불가능
myCat.favorites[2]++; // 숫자 O 가능
console.log(`============================`);

// 따옴표로 묶여있는 프로퍼티에 접근
console.log(myCat['my hobby']);

