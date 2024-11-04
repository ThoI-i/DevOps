// 두 수를 전달받아 해당 수의 합을 리턴
function add(n1, n2) {
  return n1 + n2;
}

function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}

let r1 = add(5, 4);
let r2 = add3(1, 2, 3);

// n개의 정수를 전달하면 그 합을 반환
function addAll(numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}
let r3 = addAll([10, 20, 30, 40, 50]);
console.log(`r3: ${r3}`);
console.log(`===============`);

//JS ES6+ 스프레드
function addAllES6(...numbers) {
  // 배열에 묶여서 나옴
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}
let r4 = addAllES6(5, 8, 3, 10, 20, 30);
console.log(`r4: ${r4}`);
console.log(`========================`);

let arr = [10, 20, 30];
arr.push(2, 1, `안뇽`, `잘가`, `ㅁㅁ`, `ㄴㄴ`);
arr.splice(2, 1, `안뇽`, `잘가`, `ㅁㅁ`, `ㄴㄴ`);
console.log(arr);
console.log(`========================`);
// function min(numberList) {
//   let minimum = numberList[0];
//   for (let i = 1; i <= numberList.length; i++) {
//     if (numberList[i] < minimum) {
//       minimum = numberList[i];
//     }
//   }
//   return minimum;
// }
// let result4 = min([9, 76, -90, -1000, 555, 780, -777]);
// console.log(result4);

// n개의 정수 중 최소값을 구해서 반환하는 함수
function min(...numberList) {
  let minimum = numberList[0];
  for (let i = 1; i <= numberList.length; i++) {
    if (numberList[i] < minimum) {
      minimum = numberList[i];
    }
  }
  return minimum;
}

let result4 = min(9, 76, -90, -1000, 555, 780, -777);
console.log(result4);




// function bar (start, end, ...other) {
// }
