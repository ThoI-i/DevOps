// 동기: 코드가 순차적으로 실행
// 비동기: 코드가 순서와 관련없이 실행

// 동기 ex)
for ( let i = 0; i < 3; i++) {
  console.log(`hello${i}]`);
}

for ( let i = 0; i < 3; i++) {
  console.log(`bye${i}]`);
}
console.log(`==============================`);

// 비동기 ex) 멀티스레딩
// setTimeout: 비동기 타이머 - 코드를 비동기로 동시에 실행시킴

// 동기
console.log(`오늘 할 일은 뭘까용??`);
console.log(`오늘은 월급루팡을 할게요!!`);
console.log(`==============================`);

// 비동기
console.log(`오늘 할 일은 뭘까용??`);
console.log(`==============================`);

// 지연시킴
setTimeout(() => {
  console.log(`오늘은 월급루팡을 할게요!!`);  
}, 1500);
console.log(`==============================`);

console.log('first');
setTimeout(() => {
  console.log('second');
}, 0);
console.log('third');



// setTimeout(() => {
//   for (let i = 0; i < 3; i++){
//     setTimeout(() => {
//       console.log(`hello${i}`);
//     }, 100);
//   }
// }, 0);

// setTimeout(() => {
//   for (let i = 0; i < 3; i++){
//     setTimeout(() => {
//       console.log(`bye${i}`);
//     }, 200);
//   }
// }, 0);