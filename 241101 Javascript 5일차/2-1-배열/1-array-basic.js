// let numbers = 20; 
// numbers = 10;
let numbers = [10, 20, 30, 40, 50, 60];

console.log(typeof numbers); //object -> 객체
console.log(`numbers `, numbers);

console.log(numbers[1]);
console.log(numbers[2] ** 2); // 900

numbers[0] = 999; // 배열의 요소(element) 수정
numbers[3]++;
console.log(numbers);
console.log(`=============================`);

// 배열의 총 요소(데이터) 수
console.log(numbers.length);
console.log(`=============================`);

// 배열의 마지막 요소 접근
console.log(numbers[numbers.length - 1]);
console.log(`=============================`);

// 배열의 순회 : 전체 데이터를 순차적으로 접근
for (let i = 0; i < numbers.length; i++) {
  console.log(`${i+1}번째 데이터: ${numbers[i]}`);
}
console.log(`=============================`);

// 배열의 순회 전용 반복문
console.log(`=============================`);
let weekDays = [`월`, `화`, `수`, `목`, `금`, `토`, `일`];

// for (let i = 0; i < weekDays.length; i++ ) {
//   console.log(`${weekDays[i]}요일`)
// }

//  for ~ of | 배열 전용 반복문
// for (let day of weekDays) {
//   console.log(`${day}요일`);
// }

//  특정 요일만 출력
// for (let i = 0; i < weekDays.length; i++ ) {
//   if (i % 2 === 0) {
//     console.log(`${weekDays[i]}요일`)
//    }
// }


// 배열 변수 명 관례 : 복수형, -List 어미

