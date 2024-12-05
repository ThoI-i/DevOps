// 아이디 입력 → 데이터 없을 시 가입부터 하지?
// 3개 ID 중 하나 → 비밀번호 → 비번 틀릴 시 `비번 틀렸어`
//                           → 비밀번호 성공 시 `~님 로그인 성공!!`
// 계정 추가 시 그 계정으로도 로그인 되야함

/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다. 
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.
    
- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.

- 객체의 프로퍼티가 있는지 여부 확인하는 문법 찾아봐라
in               : (객체(자신)+상속된)모든 프로퍼티의 key를 학인
hasOwnProperty   : 객체(자신)에 직접 정의된 프로퍼티 key만 확인
some             : 모든 프로퍼티의 value를 확인 후 true / false로 반환
find             : 모든 프로퍼티의 value를 확인 후 value값 / undefined로 반환
indexOf          : 기본 자료형(숫자, 문자열)이 정확히 동일한 객체일 때
findIndex        : 배열의 각 요소가 주어진 조건에 맞는 요소일 시 


// in
// for(let i = 0; i < userInfo.userList.length; i++){
// let test = `account` in userInfo.userList[i];
// console.log(test);
// }

// hasOwnProperty
// for(let i = 0; i < userInfo.userList.length; i++){
//   let test = userInfo.userList[i].hasOwnProperty("account");
//   console.log(test);
// }

// some
// let userInputAccount = prompt(`아이디를 입력하세요.`);
// let account 
// = userInfo.userList.some(parameter=>parameter.account === userInputAccount);
// alert(account); // true

// find
let userInputAccount = prompt(`아이디를 입력하세요.`);
let account 
= userInfo.userList.find(parameter=>parameter.account === userInputAccount);
alert(account); // kim1234

//findIndex
//console.log(userInfo.userList.findIndex(user=>user.account=`kim1234`));
*/
let userInfo = {
  userList: [
    {
      account: "kim1234",
      password: "kkk1234",
      username: "김두한",
    },
    {
      account: "park9876",
      password: "ppp9999",
      username: "박찬호",
    },
    {
      account: "hong7766",
      password: "hhh1234",
      username: "홍길동",
    },
  ],
};

let loop = true;
while (loop) {
  let userInputAccount = prompt(`아이디를 입력하세요.`);
  let index = userInfo.userList.findIndex(
    (userList) => userList.account === userInputAccount
  );

  if (index !== -1) {
    for (let i = 1; i < 6; i++) {
      let userInputPassword = prompt(`비밀번호를 입력하세요.\n${i}/5회`);

      if (userInfo.userList[index].password === userInputPassword) {
        alert(
          `로그인 성공\n안녕하세요 ${userInfo.userList[index].username} 님`
        );
        loop = false;
        break;
      } else if (i === 5) {
        alert(`${i}회 로그인 실패하였습니다. 로그인 페이지로 돌아갑니다.`);
        break;
      } else {
        alert(`비밀번호가 일치하지 않습니다.\n${i}/5회`);
      }
    }
  } else {
    alert(`존재하지 않는 회원입니다.\n회원가입을 해주세요`);
  }
}
