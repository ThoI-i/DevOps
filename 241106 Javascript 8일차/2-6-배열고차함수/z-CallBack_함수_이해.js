const userList = [
  {
    account: "abc1234",
    userName: "빠나나",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
    salary: 5400000,
    age: 35,
  },
];
function myFind(callbackFn) {

  for (const user of userList) {
    if (callbackFn(user)) { 
      return user;
    }
  }
  return null;
}
const foundUser2_1 = myFind(person => person.userName === `빠나나`) ; // 조건
console.log(foundUser2_1.job); // 요청값

/*
- ① foundUser2_1 선언 후 foundUser2_1.job에 만족하는 데이터 찾아줘 → myFind(callbackFn) 호출
- ② for ( const user of userList ) : userList 배열 전부 실행
- ③ myFind(callbackFn): 
myFind(person => person.userName === '빠나나');
myFind 함수 "내"에서 callback함수를 실행 시
함수 "밖"에서 myFind 함수를 호출한 『조건』을 실행
*/
