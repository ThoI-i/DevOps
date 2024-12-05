// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }
// console.log(`반복문 종료!`);

// 중첩 반복문의 break
// console.log(`=======================`);

// for (let i = 0; i < 3; i++) {
//   for ( let j = 0; j < 2; j++) {
//     if ( i === j) {
//       break;
//     }
//     console.log(`${i}, ${j}`);

//   }
// // }

// console.log(`=======================`);

// for (let i = 0; i < 3; i++) {
//   if ( i === 1) {
//     break;
//   }
//   for ( let j = 0; j < 2; j++) {
//   console.log(`${i}, ${j}`);

//   }
// }


console.log(`=======================`);

for (let i = 0; i < 3; i++) {
  for ( let j = 0; j < 2; j++) {
  if ( i === 1) {
    break;
  }
  console.log(`${i}, ${j}`);
  }
}

// 안쪽 브레이크로 바깥쪽 반복문 종료
// 레이블
console.log(`=======================`);

apple:  for (let i = 0; i < 3; i++) {
grape:    for ( let j = 0; j < 2; j++) {
  if ( i === 1) {
    break apple;
  }
  console.log(`${i}, ${j}`);
  }
}
