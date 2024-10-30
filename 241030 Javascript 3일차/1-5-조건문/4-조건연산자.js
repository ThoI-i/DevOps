// 3,000원 이상↑ 김밥을 먹을 수 있음
// 3,000원 미만↓ 굶음

let money = 5000;
// let food = (moneyy >= 3000) ? `김밥` : `굵어!`;


// 삼항 연산자
let food = (money >= 5000) ? `떡라면` : (money >= 3000) ? `김밥` : `굵어!`;

// let food;
// if (money >= 5000) {
//   food = `떡라면`;
// } else if (money >= 3000) {
//   food = `김밥`
// }
// else {
//   food = `굶어!`
// }

console.log(`선택된 음식: ${food}`);
console.log(`=========================================`);


// 시험합격 여부
let score = 70;
// let isPass = (score >= 60) ? true : false;
let isPass = (score >= 60)
console.log(`합격여부: ${isPass}`);
