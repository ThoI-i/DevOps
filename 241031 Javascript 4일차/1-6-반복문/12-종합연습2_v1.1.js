let correct = 0;
let wrong = 0;

while (true) {
  let numberA = Math.floor(Math.random() * 10);
  let numberB = Math.floor(Math.random() * 10);
  let add = numberA + numberB;
  let answer = +prompt(`${numberA} + ${numberB} = ?`);
  if ( add === 0 ){
    continue;
  }
  if ( answer === 0 ) {
    alert(`게임을 종료합니다.`)
    alert(`# 정답횟수: ${correct}회, 틀린횟수: ${wrong}회`)
    break;
  }
  if (add === answer) {
    alert(`정답입니다.`);
    correct++;
  } else {
    alert(`오답입니다.`);
    wrong++;
  }
}
