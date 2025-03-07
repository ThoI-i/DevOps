// let myName = 김철수
// // 는 아래 예시와 같음
// let 김철수 = 10;
// let myName = 김철수;
// console.log(myName);
// 김철수를 저장한게 아니라 변수를 저장

// 텍스트를 원하는 경우 "__" 쌍따옴표 붙이기

let myName = "김철수";
console.log(typeof myName);

myName = '박영희';
console.log(typeof myName);

//2015년 이후 자바스크립트 - ES6+
//2015년 이전 자바스크립트 - ES5

myName = `둘리`; // ES6+ 문법
console.log(typeof myName);

// let htmlTag = '<ul>\n\t<li>사과</li>\n\t<li>바나나</li>\n</ul>';
let htmlTag = `
 <ul>
  <li>사과</li>
  <li>바나나</li>
</ul>
`;
console.log(htmlTag);

// x월 x일 xxx날입니다.
let month = 1;
let day = 1;
let anniversary = '신정';

// let sentence = month + '월 ' + day + '일은 ' + anniversaty + '입니다.';
let sentence = `${month}월 ${day}일은 ${anniversary}입니다.`
console.log(sentence);
