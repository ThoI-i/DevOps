// // 함수 선언문 방식
// function add(n1, n2) {
//   return n1 + n2;
// }

// // 함수 표현식 방식
// const add = function (n1, n2) {
//   return n1 + n2;
// };

// 화살표 함수 방식 (ES6 신규 방식)
// 1. function → = + > / => 로 바뀜
// 2. 코드가 한 줄이면 { } 및 return 생략 가능
const add = (n1, n2) => n1 + n2;

const r1 = add(50, 90);
console.log(`r1: ${r1}`);

const sayHello = (nickname) => console.log(`${nickname}님 안뇽?`);
//                파라미터 자리
// 3. 파라미터가 1개일 떄는 ()-소괄호 생략 가능
sayHello(`크룽이`);
console.log(`==============`);

const pow = n => n ** 2;
console.log(pow(3));

