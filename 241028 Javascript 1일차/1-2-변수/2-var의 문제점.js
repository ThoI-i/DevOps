// 1. 변수 명 중복 시 Error 미발생
// var apple = 10;
// var apple = 20; 중복 생성 시 Error가 발생하지 않음
// console.log(apple);

// let
// let apple = 10;
// let apple = 20;
// console.log(apple);


// 2. 블록레벨 스코프 지원X - 블록 안에서만 임시사용 불가
// var num = 10;
// if (true) {
//   var num = 20;
//   console.log('if 안의 num: ', num);
// }
// console.log('if 밖의 num: ', num)

// let
// let num = 10;
// if (true) {
//   let num = 20;
//   console.log('if 안의 num: ', num);
// }
// console.log('if 밖의 num: ', num);

// 3. hoisting : 변수선언을 자동으로 위로 끌어올림 
// console.log(ironman);
// var ironman = '토니 스타크';

// let
// console.log(ironman);
// let ironman = '토니 스타크';