// 리턴은 언제나 하나의 값만 반환 가능!
// f(x) = 2a + 3b -> 미지수는 2개지만 결과값은 "하나"임

// 숫자 2개를 전달하면 해당 숫자의 덧,뺼,곱,나눗셈 결과를 반환
function add(n1, n2) {
  return n1 + n2;
}
// 숫자 2개를 전달하면 해당 숫자의 덧,뺄,곱,나눗셈 결과를 반환
function operate(n1, n2) {
  return {
    addResult: add(n1, n2),
    subResult: n1 - n2,
    multiResult: n1 * n2,
    divResult: n1 / n2,
  };
}

let result = operate(10, 5);
console.log(`덧셈: ${result.addResult}`);
console.log(`뺄셈: ${result.subResult}`);
console.log(`곱셈: ${result.multiResult}`);
console.log(`나눗셈: ${result.divResult}`);



