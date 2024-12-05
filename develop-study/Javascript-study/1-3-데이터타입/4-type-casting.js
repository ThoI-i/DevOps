let num = 20;
let address = '서울시';
let result = '10';

// 타입이 다르면 연산불가
console.log(num + result);
console.log(address + num);

//덧셈 제외 산술연산은 문자를 숫자로 변환 시도한 후
//변환 성공 시 산술연산 수행 실패 시 NaN 출력
const operating = num - result;
console.log(typeof operating);

let money = 1;
let fruits = '사과';

if (money) {
  console.log(`${fruits}를 살 수 있어요`);  
}

// 명시적 형 변환
const n1 = '10';
const n2 = 20;

const n3 = Number(n1) + n2; // 명시적으로 30을 만들고 싶음.
console.log(`n3: ${n3}`)

// n2 = String(n2);

let num1 = 10;
let num2 = 50;

console.log(num1 + String(num2)); //1050
console.log(num1 + num2); //60
