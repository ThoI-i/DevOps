const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
    salary: 9700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
    salary: 1900000,
    age: 42,
  },
];

// //  findIndex() : 해당 조건에 맞는 객체데이터의 인덱스를 찾는 것
// //  ex) 이름이 주차왕인 index는 몇 번이냐?
// //  [1, 2, 3, 4] || [`a`, `b`, `c`]

// const
// idx1 = [`a`,`b`,`c`].indexOf(`b`); // 1
// // idx1 = [`a`,`b`,`c`].indexOf(`d`); // d가 없어서 -1 
// console.log(`idx1: ${idx1}`);
// console.log('========================');

// function findIndex1() {
//   for ( let i = 0; i < userList.length; i++){
//   if (userList[i].userName === `주차왕`) {
//     return i // 일치 시 해당 index를 반환
//   }
// }
// return -1; // 불일치 시 -1을 반환
// }

// const idx1_1 = findIndex1();
// console.log(`idx1_1: ${idx1_1}`);
// console.log('========================');



function findIndex(callbackFn) {
    for ( let i = 0; i < userList.length; i++){
    if (callbackFn(userList[i])) {
      return i // 일치 시 해당 index를 반환
    }
  }
  return -1; // 불일치 시 -1을 반환
  }
  
  const idx1_2 = findIndex((user) => user.userName === `주차왕`);
  console.log(`idx1_2: ${idx1_2}`);
  console.log(`==============`);

// find(): 배열에서 조건에 일치하는 객체를 리턴

// 이름이 빠나나인 객체를 찾아주세요
const foundUser1 = userList.find(user => user.userName === `빠나나`); // 중복이 없는 데이터로
console.log(foundUser1.job);
console.log(`==============`);

const idx2 = userList.findIndex((user) => user.job === `과일`);
console.log(`idx2: ${idx2}`);
console.log(`===========================`);


// find() 구조 예시 : 1번 예시
function myFind(callbackFn) {
  for ( const user of userList) {
    if(callbackFn(user)) {
      return user;
    }
  }
  return null;
}

const foundUser2_1 = myFind(user => user.userName === `빠나나`); // 중복이 없는 데이터로
console.log(foundUser2_1.job);
/*
  해설
  1. myFind(user => user.userName === `빠나나`); || myFind 함수에 user.userName = `빠나나`인 데이터를 찾아줘
  2. function myFind(callbackFn) || `user`가 뭔데?
  3. for ( const user of userList) || `user`로 반환할까?
  4. if(callbackFn(user) ||
*/

// findIndex() 함수 재사용 : 2번 예시
function myFind(callbackFn) {
  const index = findIndex(callbackFn);
  return index !== -1 ? userList[index] : null ;
}

const foundUser2_2 = myFind(user => user.userName === `빠나나`); // 중복이 없는 데이터로
console.log(foundUser2_2.job);
console.log(`=========================`);

//  some() : 배열에서 특정 조건에 맞는 데이터가 하나라도 있는지 확인
//  every() : 배열에서 모든 데이터가 특정 조건에 맞는지 확인

//  급여가 500만원 이상인 회원이 1명이라도 있는가? - some
const flag1_1 = userList.some(user => user.salary >= 5000000);
// const flag1_1 = !userList.some(user => user.salary >= 5000000);
console.log(`flag1_1: ${flag1_1}`);


function mySome(callbackFn) {
  for( const user of userList ) {
    if(callbackFn (user)) {
      return true;    
    }  
  }
  return false;
}

const flag1_2 = mySome(user => user.salary >= 5000000);
console.log(`flag1_2: ${flag1_2}`);

//  모든 회원들이 서울에 삽니까?
const flag2_1 = userList.every(user => user.address === `서울`);
console.log(`flag2_1: ${flag2_1}`);

function myEvery(callbackFn) {
  for( const user of userList ) {
    if(callbackFn (user)) {
      return false;    
    }  
  }
  return true;
}

const flag2_2 = myEvery(user => user.address === `서울`);
console.log(`flag2_2: ${flag2_2}`);

