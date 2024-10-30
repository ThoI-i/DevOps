// 문제1. 
let temperature = 35;

if (temperature > 30) {
  console.log('날씨가 덥습니다.'); //출력
} else {
  console.log('날씨가 덥지 않습니다.');
}
console.log(`===========================`);

// 문제 2.
if (age >= 20) {
  console.log('성인');
} else if (age >= 13) {
  console.log('청소년'); //출력
} else {
  console.log('어린이');
}
console.log(`===========================`);

//문제 3.
let score = 92;
// let grade;

let age = 16;
let grade = (score>=90)?'A':(score>=80)?'B':(score>=70)?`C`:`D`;

// if (score >= 90) {
//   grade = 'A';
// } else if (score >= 80) {
//   grade = 'B';
// } else if (score >= 70) {
//   grade = 'C';
// } else {
//   grade = 'D';
// }
console.log(grade); // 출력
console.log(`===========================`);
