let userName = prompt('당신의 이름은?');
let userAge = prompt('당신의 나이는?');

// 출생년도 구하기 (한국나이)
let currentYear = new Date().getFullYear();
let birthYear = currentYear - userAge + 1;
//  let birthYear = 2024 - userAge + 1; 로 쓸 것 2025로 만들 시 혼동 유발

alert(`${userName}님은 ${birthYear}년생이시군요?`);