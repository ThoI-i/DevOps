const nums = [10, 20, 30, 40, 50, 60, 70, 80];

// 숫자 배열에서 홀수번쨰 데이터만 필터링 후
// 해당 수에 50을 더해서 매핑

// const filteredNums = nums.filter((n, i) => {
//   if ( i % 2 == 0 ) {
//     return n;
//   }
// });

// // console.log(filteredNums);
// const mappedArray = filteredNums.map(n => n + 50);
// console.log(mappedArray);

// 메서드 체이닝
let total = 0;
const mappedArray = nums.filter((n, i) => {
  if ( i % 2 == 0 ) {
    return n;
  }
})
.map(n => n + 50)
.forEach(n => total += n)
;
console.log(total);


console.log(`========================================================`);

const doubleNum = nums.pop() * 2;

const arr = nums.filter(n => n % 3 === 0).slice(0, 3)[1] * 10;
console.log(arr);


function foo() {
  return [];
}
function bar() {
  return "떡볶이";
}
function goo() {
  return 10;
}

