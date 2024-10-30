//1부터 입력한 수의 2의 제곱 수 출력

// 숫자 입력 받고 1~해당 숫자까지 2의 제곱수를 가로로 출력
// 특정 숫자를 고정해보자!
// let n = 20;

// 1 ~ 20까지의 2의 제곱수를 구하자!
// 2, 4, 8, 16
// for (let i = 2; i<=20; i *= 2) {
//   console.log(i);
// }

let number = prompt("양의 정수를 입력하세요.");
let square = 2;
let result = ``;
for (let i = 1; i < number; i++) {
  if ( square ** i < number ) {
    result += ((square ** i) + ` `);
  }
}
alert(`${result}`);