const student = {
  stuName: `뽀로로`,
  age: 5,
  birthDay: `2020-01-03`
};

// const name = student.stuName;
// const age = student.age;
// const birthDay = student.birthDay;

// 간략화
const { stuName: name, age, birthDay } = student;
//       키값: 호칭 추가              = 객체명
console.log(`stuName: ${student.stuName}`); // student.stuName과 같음
// console.log(`stuName: ${age}`); // 필요한 것만 호출 가능
console.log(`birthDay: ${birthDay}`);
console.log(`==========================================`);

const divStyle = {
  'font-size': '16px',
  'border-radius': '50%'
};
// 간략화
const { 'font-size' :fontSize, 'border-radius':bddr } = divStyle;

console.log(divStyle['font-size']);
// console.log(divStyle.'font-size'); // Error 발생: .연산자는 하이폰(-) 접근 불가
console.log(`-----------------------------------------`);
console.log(fontSize);
console.log(bddr);
console.log(`==========================================`);
const myPetInfo = ({ name, age }) => {
  console.log(`우리 애완동물 이름은 ${name}입니다.`);
  console.log(`우리 애완동물 나이는 ${age}입니다.`);
};

const dog = {
  name: '초코',
  age: 3,
  kind: '진돗개',
  injection: true,
};
const cat = { name: '나비', age: 2 };

myPetInfo(dog);
myPetInfo(cat); 

console.log('==============');

const { kind, injection, ...dogRest } = dog;
console.log(dogRest);

// 스프레드
// cat의 원본은 유지하면서 새 객체에 injection프로퍼티를 추가하고싶다
const copyCat = {
  ...cat,
  injection: false,
  age: 10
};

console.log('========');

console.log(cat);
console.log(copyCat);


