const nums = [10, 20, 30, 40, 50];

// reduce(): 배열의 각 요소들을 주어진 콜백에 맞게 합산,누적하여 단 하나의 결과값을 반환
/*
  reduce에 전달되는 콜백
  - callbacks(accumulator, currentValue)
  1. accumulator: 어떤 데이터를 누적하는 변수
  2. currentValue: 현재 루프회차에서 사용할 데이터
  
  -> reduce는 반복을 실행 횟수만큼 currentValue를 accumulator에 return 조건에 맞게 누적됨
  -> reduce는 마지막 accumulator의 값을 리턴
*/

// const c = nums.reduce(function(a, b){
// console.log(`a: ${a}`),
// console.log(`b: ${b}`);
// console.log(`==========`);
// // return a * b;
// return a + b; // 다음 accumulator의 값
// }, 80); // accumulator 초기값(0번 인덱스 지정) 설정 가능

/*
  reduce의 콜백 다음 파라미터는 initialValue를 의미하며,
  반복문의 accumulator 시작값을 0번 인덱스에서 initialValue로 교체함
  따라서 initialValue를 80으로 두고 return a + b;

  80 + 10 + 20 + 30 + 40 + 50 // initalValue 사용 시
  10 + 20 + 30 + 40 + 50      // initialValue 미사용 시
 */
// console.log(`c: ${c}`);

const c = nums.reduce((a,b) => a + b); //실제 사용
console.log(`c: ${c}`);

const d = nums.reduce((a,b) => a + b, 50); //초기값 사용
console.log(`d: ${d}`);


console.log(`=================================================`);

const appleBasket = [
  {
    color: "green",
    sweet: 13,
  },
  {
    color: "red",
    sweet: 14,
  },
  {
    color: "red",
    sweet: 11,
  },
  {
    color: "green",
    sweet: 6,
  },
  {
    color: "green",
    sweet: 7,
  },
  {
    color: "green",
    sweet: 9,
  },
  {
    color: "yellow",
    sweet: 9,
  },
  {
    color: "yellow",
    sweet: 9,
  },
];

// 사과 바구니에 있는 모든 사과들의 당도를 합은?

// const totalSweet = appleBasket.reduce((acc, curr) => {
//   // console.log(`acc: ${acc}`); // Object
//   // console.log(`curr: ${curr}`); // Object
//   // console.log(`acc: `, acc); // acc: 0
//   // console.log(`curr: `, curr); // curr:  { color: 'green', sweet: 13 }
//   return acc + curr.sweet;
// }, 0); // acc: 0
// // }); // acc: { color: 'green', sweet: 13 }

// 예제: 사과 당도의 합
// const totalSweet = appleBasket.reduce((acc, curr) => acc + curr.sweet, 0);
// console.log(`totalSweet: ${totalSweet}`);

// 실습: 사과 당도의 합
const sweety = appleBasket.reduce((acc, curr) => acc + curr.sweet, 0);
console.log(`totalSweet: ${sweety}`);
console.log(`END 사과 당도의 합================================`);

/*
  색깔별로 사과 카운트하기

  결과 예시 : { `red` : 8, `green` : 13 }
 */

// const resultObj = {}; //객체

// for (const apple of appleBasket) {
//   const color = apple.color;
//   // 이 컬러가 지금 처음등장한 컬러인지, 기존에 저장된 컬러인지
//   // 처음 당장했으면 프로퍼티 생성, 기존에 있던 컬러면 카운트값만 1추가
//   if (color in resultObj) {
//     // in 해당 키가 객체 안에 있는지 확인
//     resultObj[color]++; // resultObjs 배열에 [color]키의 value를 ++해라
//   } else {
//     // 해당 색깔이 처음 등장
//     resultObj[color] = 1; // resultObjs 배열 [color]키의 value=1이다
//                           // resultObj[color] = 1; | 객체명 [key명] = value값
//   }
// }
// console.log(resultObj);

const countObj = {};

for (const apple of appleBasket) {
  const color = apple.color;
  if( color in countObj ) {
    countObj[color]++;
  } else {
    countObj[color]=1;
  }
}
console.log(countObj);
console.log(`END 사과 카운트 1================================`);

// reduce로 재구현
const counter = appleBasket.reduce((countObj, apple) => {
  // console.log(`countObj: `, countObj);
  // console.log(`apple: `, apple); // 사과 하나하나씩 추가
  if (apple.color in countObj) {
    // 이미 있는 색상
    countObj[apple.color]++;
  } else {
    // 처음 나온 색상
    countObj[apple.color] = 1;
  }
  return countObj; // accumulator를 사용하기 위해서는 return이 필요함
}, {});

console.log(counter);
console.log(`End Reduce 사과 카운트2 예제=============================`);

const countColor = appleBasket.reduce((acr, crr) => {
  if (crr.color in acr){
    acr[crr.color]++;
  } else {
    acr[crr.color] = 1;
  }
  return acr;
},{});
console.log(countColor);
console.log(`End Reduce 사과 카운트2 실습=============================`);

//reduce 분석
function myReduce(callbackFn, initialValue) {
  // 어떤 값을 지속적으로 누적할 변수
  let accumulator = initialValue !== undefined ? initialValue : appleBasket[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < appleBasket.length; i++) {
    let currentValue = appleBasket[i] ;
    accumulator = callbackFn(accumulator, currentValue);
  }
  return accumulator;
}

const total = myReduce((sweetTotal, apple) => sweetTotal + apple.sweet, 0);
console.log(`total: ${total}`);
