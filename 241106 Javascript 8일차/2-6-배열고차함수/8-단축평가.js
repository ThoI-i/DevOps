true && true; // true
true && false; // false
false && true; // false
false && false; // false

true || true; // true
true || false; // true
false || true; // false
false || false; // false

// 단축평가 (short circuit)
// 좌항에서 결과가 판명날 경우 우항을 의도적으로 무시
// truthy, falsy 상황에서도 적용

//  && : 양쪽항이 논리가 아닌 경우
//  첫 번쨰 falsy를 반환
console.log(`hello` && null); //  null
console.log(0 && `메롱`); //  0
console.log(`============================`);

// || : 논리가 아닌 경우, 첫 번쨰 truthy를 반환
console.log(`hello` || undefined); // hello
console.log(null || 300); // 300

// if (isLogin()) {
//   <h2>회원님 환영합니다!</h2>
// }

// isLogin() && <h2>회원님 환영합니다!</h2>


let a = 10;
a && console.log(`하하호호`);



