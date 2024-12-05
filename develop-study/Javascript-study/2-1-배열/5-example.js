// 문제 1.
let fruits = ['사과', '바나나'];
fruits.push('오렌지');  // 마지막에 '오렌지' 추가
fruits.shift();           // 첫 번째 요소 제거

console.log(fruits); // 예상 출력: ['바나나', '오렌지']
console.log(`=========================`);
// 문제 2.
let numbers = [5, 10, 15, 20, 25];
let index = numbers.indexOf(15); // 15의 인덱스 찾기
console.log(index); // 예상 출력: 2

let slicedNumbers = numbers.slice(1, 4); // 인덱스 1부터 3까지 추출
console.log(slicedNumbers); // 예상 출력: [10, 15, 20]
console.log(`=========================`);
// 문제 3. 
let fruits_3 = ['바나나', '사과', '오렌지', '망고'];
fruits_3.splice(0, 2, '포도', '키위'); // 첫 번째와 두 번째 요소를 제거하고 새로운 요소 추가

console.log(fruits_3); // 예상 출력: ['포도', '키위', '오렌지', '망고']
