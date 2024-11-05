// 자바스크립트 변수는 무조건 const로 선언
// 변경해야할 변수만 부분적으로 let으로 교체

const dog = { // 교체할 수 없게 const 설정
  name: `해피`,
  kind: `진돗개`,
  age: 3
};

// 프로퍼티 값 변경
dog.age = 4;

dog = {
  name: `초코`
};
console.log(dog);

// const 예시
const a = 10;
const b = 20;
const result = a + b;

// let 예시
for (let i = 0; i < 3; i++) {

}