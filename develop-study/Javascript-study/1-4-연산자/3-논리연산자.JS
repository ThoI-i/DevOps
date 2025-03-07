// 피연산자 (operand) - 연산의 대상이 되는 데이터
// 산술연산 - 피연산자가 숫자여야 함
console.log(3 * 4);
console.log('김철수' * true);

console.log('=====================');

// 비교연산 - 피연산자가 숫자 또는 문자
// 논리연산 - 피연산자가 논리여야 함
let t = true;
let f = false;


// && : 양쪽 항이 모두 true인 경우 true로 도출
// 로그인 로직 : id + password 일치 = 성공(true)
console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

console.log('=====================');

let height = 145;
let age = 5;
console.log(height >= 140 && age >= 6);

console.log('=====================');
// || : 양쪽 항 중 하나만 true인 경우 true로 도출

console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);
console.log('=====================');

// 논리 반전
console.log(!t);
console.log(!f);

// if (!bookList.contain(`삼국지`)) {} // 사용 예시
