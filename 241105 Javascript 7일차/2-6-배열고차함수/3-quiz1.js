const traders = [
  {
    trader: {
      name: "김철수", // traders[0].trader.name
      city: "대전",
    },
    year: 2023,
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
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아 거래자 정보(이름, 도시)를 배열에 매핑해주세요
const customerInfo = traders
  .filter(user => user.year === 2022)
  // console.log(customerInfo);
  .map(user => ({
    name: user.trader.name,
    city: user.trader.city,
  }));
console.log(customerInfo);
console.log(`========================================================`);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요.
const customerCityArr2 = [];
const customerCity = traders.filter((user, i) => {
  customerCityArr2[i] = user.trader.city;
});
console.log(customerCityArr2);
console.log(`========================================================`);

// 연습 3: 대전에 근무하는 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요.
// 연습 3-1
// return에 if문 거는게 말이 됨? → 자바스크립트에서는 return이 없는 함수로 인식함
const customerCityArr3a = [];
const customerDeageon = traders.forEach (user => {
  if (user.trader.city === `대전`) {
    customerCityArr3a.push ({ name: user.trader.name, city: user.trader.city });
  }
});

console.log(`연습 3-1`);
console.log(customerCityArr3a);
console.log(`-------------------------------------------------------`);

// 연습 3-2
const customerCityArr3b = [];
const customerDeageon2 = traders
  .filter((user) => user.trader.city === `대전`)
  // console.log(customerDeageon2);
  .map(
    (user, i) =>
      (customerCityArr3b[i] = {
        name: user.trader.name,
        city: user.trader.city,
      })
  );
console.log(`연습 3-2`);
console.log(customerCityArr3b);
console.log(`========================================================`);

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요.
const customerCityArr4 = [];
const customerName = traders.filter(
  (user, i) => (customerCityArr4[i] = user.trader.name)
);
console.log(customerCityArr4);
console.log(`========================================================`);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.
function aa() {

  let totalPrice = 0;
  const custmerSeoulConstractTotal = traders.forEach((user) => {
    if (user.trader.city === `서울`) {
      totalPrice += user.value;
    }
  });
  return totalPrice;
}
console.log(aa());