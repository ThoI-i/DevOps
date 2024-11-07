// 디스트럭처링 (Distructuring) : 구조 분해 할당

const userNames = [`김철수`, `홍길동`, `고구마`];
//  배열 내 데이터를 다시 각각의 변수로 저장할 시
const kim = userNames[0]; // 김철수
const hong = userNames[1]; // 홍길동
const go = userNames[2]; // 고구마

console.log(`kim: ${kim}, hong: ${hong}, go: ${go}`);

// 간략화
const [kim1, hong1, go1] = userNames;

console.log(`kim: ${kim1}, hong: ${hong1}, go: ${go1}`);

// 0번 / 2번 인덱스만 추출 / 1번은 제외
const [kk, , gg] = userNames;
console.log(`kk: ${kk}, gg: ${gg}`);
console.log(`=====================================`);


const exArr = [[10, 20], () => {}];

//  exArr[0][1]
//  exArr[1]();

const [Numbers, foo] = exArr;
Numbers[1];
foo();
console.log(`END 예시 1=====================================`);

let first = 10, second = 20;
[first, second] = [second, first]; //↓
// const two = [second, first]; // 1단계
// console.log(two); //  2단계
// const [a, b] = two; // 3단계
console.log(`first : ${first}, second: ${second}`);
console.log(`END 예시 2=====================================`);

//  맨 앞 2개의 숫자만 각각의 변수로 저장
//  나머지는 새 배열로 묶어서 보관
const nums = [1, 3, 5, 7, 9, 11]

//  일반 방법
// const numsCopy = nums.slice();
// const one = numsCopy.shift();
// const three = numsCopy.shift();

// console.log(`one: ${one}`);
// console.log(`three: ${three}`);
// console.log(`one: ${numsCopy}`);

//  간략화
const [one, three, ...numsCopy] = nums;

console.log(`one: ${one}`);
console.log(`three: ${three}`);
console.log(`others: `, numsCopy);
console.log(`END 예시 3=========================================`);

// 스프레드(퍼트림): 배열 합치기
const foods = [`햄버거`, `콜라` ,`감자튀김`];
const fruits = [`오렌지`, `자몽`, `레몬`];

const newFoods1 = [foods, fruits];
console.log(newFoods1); // 배열 안에 배열 생성됨
console.log(newFoods1.length); // 2
console.log(`-----------------------------------`);
const newFoods2 = [...foods, ...fruits];
console.log(newFoods2); // 1개 배열에 합침
console.log(newFoods2.length); // 6
console.log(`-----------------------------------`);

//  배열 복사
const newFruits1 = [...fruits];
newFruits1[1] = `포도`;
console.log(newFruits1); // 자몽 → 포도로 변경됨
console.log(fruits); // 자몽 유지
console.log(`-----------------------------------`);
const myFavoriteFoods = [`족발`, ...foods, `닭강정`, `피자`];
console.log(myFavoriteFoods);
