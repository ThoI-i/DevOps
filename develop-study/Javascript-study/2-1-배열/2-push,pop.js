let petList = [`멍멍이`, `야옹이`, `짹쨱이`];
console.log(petList);

// push(); 배열 맨 끝에 데이터 추가
petList.push(`거부기`)
console.log(petList);

petList.push(`어흥이`, `비둘긔`, `닭달이`);
console.log(petList);
console.log(petList.length);

// pop(); 배열 맨 끝 데이터 삭제
petList.pop();
petList.pop();
petList.pop();
petList.pop();
let x = petList.pop();

console.log(petList);
console.log(`x: ${x}`); // 빼낸 데이터 확인 가능

// shift(); 배열의 멘 첫 데이터 삭제
// unshift(); 배열의 맨 첫 데이터 추가
petList.unshift(`뻘뻘이`, `호빵이`);

petList.shift();

