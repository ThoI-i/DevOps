// let n =1;
// console.log(`${n}번 학생 안녕하세요!`);

// n++;
// console.log(`${n}번 학생 안녕하세요!`);
// n++;
// console.log(`${n}번 학생 안녕하세요!`);
// n++;
// console.log(`${n}번 학생 안녕하세요!`);

// 초기변수 세팅; 끝 조건식; 변수증감식

// for (let n = 1; n < 51; n++) {
//   console.log(`${n}번 학생 안녕하세요!`);  
// }

// for (let i = 0; i < 10; i++ ) {
//   console.log(`안녕`);
//   console.log(`잘가`);
// }

// 구구단 2단 출력
// console.log(`2 x 1 = 2`);
// console.log(`2 x 2 = 4`);
// console.log(`2 x 3 = 6`);
// console.log(`2 x 4 = 8`);
// // ...
// console.log(`2 x 9 = 18`);

// let line = 1;
// console.log(`2 x ${line} = 2`);
// line++;
// console.log(`2 x ${line} = 4`);
// line++;
// console.log(`2 x ${line} = 6`);
// line++;
// // ...
// console.log(`2 x ${line} = 8`);

// let level = 7; // 단수
// for ( let line = 1; line <= 9; line++ ) {
//   console.log(`${level} x ${line} = ${level * line}`);
// // end for
// }
// console.log(`반복문 종료`);

// console.log(`==========`)

// 누적합 구하기
// 1  ~ 10까지의 누적합 == 55
let total = 0;

// let n = 1;
// total += n; // 0 + 1
// n++;
// total +=n; // 0 + 1 + 2
// n++; // 3
// total += n; // 0 + 1 + 2 + 3

for (let n = 1; n <= 10; n++) {
  total += n;
}
console.log(`1~10까지의 총합: ${total}`);

console.log(`=========================`);

for (let i = 10; i >= 0; i--) {
  console.log(`{i}!!`);
  
}



