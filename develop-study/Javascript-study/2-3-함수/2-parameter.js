// 매개 변수(parameter) : 함수가 실행할 때 외부에서 전달받는 값

// 언어를 알려주면 그 언어로 인사해주는 함수
function greet(language=`한국어`) { // 미입력 시: 한국어 출력
  console.log(`language:${language}`); // 우가우가!~ 가 나오는 이유
  
  switch (language) {
    case `한국어`:
      console.log(`안녕하세요!`);
      break;
    case `영어`:
      console.log(`hello`);
      break;
    case `일본어`:
      console.log(`こんにちは`);
      break;
      default:
        console.log(`우가우가!~`);
  }
}

// 함수에 전달하는 값 : 인수 (argumernt)
greet('영어');
greet();
greet('힌두어');
console.log(`============`);

// x ~ y 사이의 랜덤정수를 생성
function makeRandomInteger(x, y) {
  let rn = Math.floor(Math.random() * (y - x +1)) + x;
  console.log(`랜덤정수: ${rn}`);
  return rn;
}

// // 호출(1 ~ 10 사이 숫자 생성)
// makeRandomInteger(1, 10);

let rn = makeRandomInteger(1,3)

if (rn === 1) {
  console.log(`랜덤정수 1입니다.`);
}
console.log(`============`);

// 매개변수 없는 함수
function infiniteHello() {
  for (let i = 0; i < 5; i++) {
    console.log(`hello`);
  }
}

for (let i = 0; i < 10; i++){
  infiniteHello();
}
