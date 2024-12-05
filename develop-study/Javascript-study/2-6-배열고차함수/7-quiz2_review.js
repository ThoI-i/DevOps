const traders = [
  {
    trader: {
      name: "김철수", // traders[0].trader.name
      city: "대전",
    },
    year: 2023, // traders[0].year
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022, // traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2023,
    value: 1500000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 500000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2023,
    value: 120000,
  },
];

// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
const DeageonToalPriceIn2023 = traders
  .filter((trs) => trs.trader.city === "대전" && trs.year === 2023)
  // console.log(DeageonToalPriceIn2023);
  .reduce((total, trs) => total + trs.value, 0);
console.log(`2023년 대전 총 거래액: ${DeageonToalPriceIn2023}원`);
console.log(`END 문제1. ==================================`);

// 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.**
const BusanCustomer = traders
  .filter((trs) => trs.trader.city == "부산")
  .map((trs) => trs.trader.name);
console.log(BusanCustomer);
console.log(`END 문제2. ==================================`);

// 3. **모든 거래 중 가장 높은 거래액을 가진 거래의
//   거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
let highestConstruct3_1 = traders[0]; // 1. 첫 번째 인덱스 투입

for (const trs of traders) {
  if (highestConstruct3_1.value < trs.value) {
    // 2. trs.value값이 클 경우
    highestConstruct3_1 = trs; // trs 인덱스 값을 투입
  }
}
console.log(highestConstruct3_1); //3. 출력
console.log(`END 문제3-1. for ~ of ==================================`);

const highestConstruct3_2 = traders.reduce((max, trs) =>
  max.value < trs.value ? trs : max
);
console.log(
  `가장 높은 거래액 정보 - 이름: ${highestConstruct3_2.trader.name} 도시: ${highestConstruct3_2.trader.city} 거래액: ${highestConstruct3_2.value}`
);
console.log(`END 문제3-2. reduce ==================================`);

// 4. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
//   예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**

let cityAll = {};
for (trs of traders) {
  const city4_1 = trs.trader.city;
  if (cityAll[city4_1] === undefined) {
    // cityAll 객체에 city 프로퍼티 키가 없다면
    cityAll[city4_1] = trs.value; // city를 프로퍼티 키로 = trs.value를 value로 등록해라
  } else {
    cityAll[city4_1] += trs.value;
  }
}
console.log(cityAll);
console.log(`END 문제4-1. for ~ of ==================================`);

const totalCity = traders.reduce((cityObj, trs) => {
  const city4_2 = trs.trader.city;
  cityObj[city4_2] = (cityObj[city4_2] || 0) + trs.value;
  return cityObj;
}, {});
console.log(totalCity);
console.log(`END 문제4-2. reduce ==================================`);

// 5. **거래액이 700000원 이상인 거래를 모두 찾아,
//   해당 거래의 연도별로 분류해주세요. 결과는
//   `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태가 되어야 합니다.**

// const over700k = traders
// .filter( trs => trs.value > 700000 ) // 70만원 넘는 사람 필터링
// // console.log(over700k);
// .reduce((trsObj5_1, trs) => { // trsObj5_1를 return값으로 받음(초기값 {} 객체로), trs를 파라미터로 지정
//   const yearString = trs.year.toString(); // 년도(yearString)를 프로퍼티 키로 쓰기 위해
//   if ( trsObj5_1[yearString] !== undefined ){ //trsObj5_1 객체에 키가 있는 경우 value 값 추가
//     trsObj5_1[yearString].push(trs);
//   } else {
//     trsObj5_1[yearString] = [trs];  //trsObj5_1 객체에 키가 없는 경우: 키 생성 + value값 추가
//   }
//   return trsObj5_1; // trsObj5_1 반환값 지정하기
// },{})
// console.log(over700k);
console.log(`END 문제5-2-1. reduce ==================================`);

const over700k_2 = traders
  .filter((trs) => trs.value > 700000)
  .reduce((trsObj5_2, trs) => {
    const yearString = trs.year.toString();
    if (trsObj5_2[yearString] !== undefined) {
      trsObj5_2[yearString].push(trs);
    } else {
      trsObj5_2[yearString] = [trs];
    }
    return trsObj5_2;
  }, {});
console.log(over700k_2);
console.log(`END 문제5-2-2. reduce ==================================`);

// 6. **각 거래자별로 그들이 진행한 거래의
//   평균 거래액을 계산해주세요.
//   결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.**

const byPerson = traders.reduce((personObj, trs) => {
  const personName = trs.trader.name; // 거래자명을 키로 사용하기 위해 지정 
  if (personObj[personName] === undefined) { // personObj[거래자명]이 없는 경우
    personObj[personName] = { sum: trs.value, count: 1}; // sum과 count: 1을 추가
  } else {
    personObj[personName].sum += trs.value; // 거래자 명이 있을 시 sum을 데이터 추가
    personObj[personName].count++; // count는 ++
  }
  return personObj; // 반환값 지정하여 재확인
}, {});
console.log(byPerson);
console.log(`END 6-1 reduce: sum, count 구하기---------------------------------`);

// 객체 전용 반복문 for ~ in 
for ( const key in byPerson ) { // in: 프로퍼티 key를 찾는 객체 메서드
  byPerson[key] = byPerson[key].sum / byPerson[key].count; // 각 프로퍼티 키의 값을 변경  
}
console.log(byPerson);
console.log(`END 6-2 for ~ in을 통해 필요값만 mapping---------------------------------`);

// const byPersonAverage = traders.reduce((personObj2, trs) => {
//   const personName2 = trs.trader.name; // user명을 키로 쓴 후 sum과 count를 빼냄
// if ( personObj2[personName2] === undefined ) {
//   personObj2[personName2] = {sum:trs.value, count:1}; 
// }else {
//   personObj2[personName2].sum += trs.value;
//   personObj2[personName2].count++;
// }
// return personObj2;
// }, {});
// console.log(byPersonAverage);


// console.log(`END 6-1-1 reduce: sum, count 구하기---------------------------------`);

// for (const key in byPersonAverage ) {
//   byPersonAverage[key] = byPersonAverage[key].sum / byPersonAverage[key].count;
// }
// console.log(byPersonAverage);

// console.log(`END 6-2-2 for ~ in을 통해 필요값만 mapping---------------------------------`);


// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한 거래자의
//   이름과 그 거래 횟수를 출력해주세요.**
const highestTrsAmount = traders.reduce((trsObj7, trs) => {
  const userName = trs.trader.name;
    trsObj7[userName] = trsObj7[userName] ? trsObj7[userName] + 1 : 1; // 
  return trsObj7;
},{});
console.log(highestTrsAmount);
console.log(`END 7-1 사용자 명과 거래 횟수 추가 ==================================`);

let highestName = '';
let highestCount = 0;   
for ( const key in highestTrsAmount ) {
   if ( highestTrsAmount[key] > highestCount ) {
    highestName = key;
    highestCount = highestTrsAmount[key];
  }
} 
console.log(`가장 많은 거래자 명: ${highestName} | 거래 수: ${highestCount}`);
console.log(`END 7-2 가장 많은 거래자 명 / 거래 수 ==================================`);
// 7-2-1
const highestCountTrader = traders.reduce((traderObj, trs) => {
  const traderName = trs.trader.name;
  traderObj[traderName] = traderObj[traderName] ? traderObj[traderName] + 1 : 1;
  return traderObj;
},{});
console.log(highestCountTrader);

// 8. **모든 거래 중 거래액이 중간값인
//   거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**
const sortedTraders2 = traders.slice().sort((trs1, trs2) => trs1.value - trs2.value); // 값 복사해서 오름차순 정렬
console.log(sortedTraders2);
console.log(`END 8-1 값 복사 후 오름차순 정렬=========================================`);

let middleTraderIndex;
if ( sortedTraders2.length % 2 === 1 ) {
  middleTraderIndex = sortedTraders2[sortedTraders2.length/2];
}
  else if ( sortedTraders2.length % 2 === 0) {
    const firstValueOdd = sortedTraders2[sortedTraders2.length/2].value;
    const secondValueEven = sortedTraders2[(sortedTraders2.length/2)-1].value;
    middleTraderIndex = (firstValueOdd + secondValueEven)/2;
  }
console.log(`중간 거래액: ${middleTraderIndex}`);
console.log(`END 8-2. 중간 거래액=========================================`);

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요.
//   결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**
const cityCount = traders.reduce((cityObj, trs) => {
  const cityName = trs.trader.city;
  cityObj[cityName] = cityObj[cityName] ? cityObj[cityName] + 1 : 1;
  return cityObj;
},{});
console.log(cityCount);
console.log(`END 9. 도시 명: 총 거래 수=========================================`);

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후,
//   정렬된 리스트를 출력해주세요.
//   각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**

const sortedByValueASC = traders.slice().sort((trs1, trs2) => trs1.value - trs2.value);
console.log(sortedByValueASC);
