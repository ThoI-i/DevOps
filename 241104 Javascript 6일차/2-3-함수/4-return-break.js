// return은 함수를 강제종료하는 구문
function foo() {
  let a = 10;
  let b = 20;
  return a + b; // break와 같은 역할
}

for (let i = 0; i < 3; i++) {
  if (i === 2) {
    break;
  }
  console.log(`hello`);
}
console.log(`=================`);

function callYourName(name) {
  let prohibits = [`바보`, `멍충이`, `메롱`];
  if (prohibits.includes(name)) {
    console.log(`그런 이름은 불러줄 수 없단다 얘야`);
    return;
  }
  console.log(`${name}님 안녕하세요!!!`);
}

callYourName(`뽀로로`);
callYourName(`멍충이`);
console.log(`=================`);

function loop(n) {
  while (true) {
    if (n === 0) {
      console.log(`break!`);
      break;
    } else if (n === 1) {
      console.log(`return`);
      return;
    }
  } // end while
  console.log(`end!!!`);
  
} // end fuction

loop(0); // 반복문만 종료됨 → 이후 코드 실행
loop(1); // 함수 자체를 종료시킴
console.log(`=================`);

// 리턴은 언제나 하나의 값만 반환 가능!
// f(x) = 2a + 3b -> 미지수는 2개지만 결과값은 "하나"임

// 숫자 2개를 전달하면 해당 숫자의 덧,뺼,곱,나눗셈 결과를 반환
function operate(n1, n2) {
  let addResult = n1 + n2;
  let subResult = n1 - n2;
  let multiResult = n1 * n2;
  let divResult = n1 / n2;
  
  // let resultList = [addResult, subResult, multiResult,divResult];
  // return resultList;
  let resultList = {
    addResult: addResult,
    subResult: subResult,
    multiResult: multiResult,
    divResult: divResult
  };
  return resultList;
}

// let result = operate(10, 5);
// console.log(`덧셈: ${result[0]}`);
// console.log(`뺼셈: ${result[1]}`);
// console.log(`곱셈: ${result[2]}`);
// console.log(`나눗셈: ${result[3]}`);

let result = operate(10, 5);
console.log(`덧셈: ${result.addResult}`);
console.log(`뺄셈: ${result.subResult}`);
console.log(`곱셈: ${result.multiResult}`);
console.log(`나눗셈: ${result.divResult}`);



