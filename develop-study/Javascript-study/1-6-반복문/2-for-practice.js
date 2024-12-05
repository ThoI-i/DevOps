// 50 내의 2의 배수를 출력하기
// for (let i = 2; i <= 50; i += 2) {
//   console.log(`${i}\n`);
// }

// 50 내의 2의 배수를 가로로 출력하기
// let result = ``;
// for (let i = 2; i <= 50; i += 2) {
//   result += `${i} `
// }
// console.log(result);
// console.log(`====================`);

// 1~50 사이 6의 배수 출력하기
// let result = ``;

// for (let i = 1; i <= 50; i++) { 
//   if ( i % 6 === 0) { // 6의 배수라면 : 나머지 활용
//     console.log(i); //출력 한다
//   }
// }
// console.log(`====================`);
  
// 1~100 사이 7의 배수이면서 14의 배수가 아닌 수 출력하기

// for (let i = 1; i<=100; i++ ) {
//   if (i % 7 === 0 && i % 14 !==0 ) {
//     console.log(i);
//   }
// }
// console.log(`====================`);

// 7777 안에 있는 3의 배수의 개수 알아내기
let count = 0;

for (let i = 1; i<=7777; i++) {
  if ( i % 3 === 0 ) {
    // 3의 배수일 경우 실행될 코드
    count++;
  }
}
console.log(`3의 배수의 총 개수: ${count}개`);
