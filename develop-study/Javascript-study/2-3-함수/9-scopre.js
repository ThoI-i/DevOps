// 블록 스코프 : 블록 안에서 let, const로 선언한 변수는 블록 밖에서 사라짐
for (let i = 0; i < 3 ; i++) {
  console.log(`i : ${i}`);
}

// 전역 스코프: 프로그램 전체에서 사용 가능한 변수
let i;
for (i = 0; i < 3 ; i++) {
  console.log(`i : ${i}`);
}
  console.log(`outer i = ${i}`);
console.log(`======================`);

let n = 'hello';
if (true) {
  let n = 10;
  if (true) { 
    let n = 20; 
    console.log(`inner n : ${n}`);
  } //END inner if
  console.log(`outer n : ${n}`);
} //END outer if
console.log(`======================`);

// 지역 스코프(local scope) : 함수 내 변수가 생성/소멸
function foo(){
  let x = `홍길동`;
  console.log(`local x: ${x}`);
  // return x;
}
foo();
// let x = foo();
// console.log(`global x: ${x}`);

// 최대한 전역 스코프 사용을 자제
// 1. 변수 이름 충돌 문제
// 2. 전역변수는 프로그램 종료시까지 메모리에 남아있으므로 비효율적
// 3. 스코프 체인이 김
console.log(`======================`);


