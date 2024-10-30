//1부터 입력한 수의 2의 제곱 수 출력
let number = prompt("양의 정수를 입력하세요.");
let result = ``;
let count = 0;
for (let i = 1; i <= number; i++) {
  if ( number % i === 0 ) {
    result += i + `\n`;
  }
  count++;
}
alert(`${result}약수의 개수: ${count}개`);