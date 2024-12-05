let correct = 0;
let wrong = 0;
let difficulty = 0;
let count = 0;

while (true) {
  let caseRand = Math.floor(Math.random() * 3);
  let numberA;
  let numberB;
  let question;
  let answer;
  let basic_operation;

  let difficulty = prompt(`난이도를 선택해주세요\n상 | 중 | 하`);
  alert(difficulty);
  switch (difficulty) {
    case `상`:
      numberA = Math.floor(Math.random() * 1000);
      numberB = Math.floor(Math.random() * 1000);
      break;
    case `중`:
      numberA = Math.floor(Math.random() * 100);
      numberB = Math.floor(Math.random() * 100);
      break;
    case `하`:
      numberA = Math.floor(Math.random() * 10);
      numberB = Math.floor(Math.random() * 10);
      break;
    default:
      alert("올바른 난이도를 선택해주세요 ( 상, 중, 하 )");
      continue;
  }
  alert('난이도 설정 완료');
  switch (caseRand) {
    case 0:
      basic_operation = `+`;
      question = numberA + numberB;
      break;
    case 1:
      basic_operation = `-`;
      question = numberA - numberB;
      break;
    case 2:
      basic_operation = `×`;
      question = numberA * numberB;
      break;
    case 3:
      basic_operation = `÷`;
      question = numberA / numberB;
      break;
  }
  alert('연산자 설정 완료');
  alert(`${basic_operation}, ${question}`);
  // if (
  //   question === 0 || 
  //   numberA < numberB ||
  //    numberA % numberB !== 0
  //   ) {
  //   alert('continue!');
  //   continue;
  // }
  count++;
  answer = +prompt(`Q${count}. ${numberA} ${basic_operation} ${numberB} = ?`);

  if (answer === 0) {
    alert(`게임을 종료합니다.`);
    alert(`# 정답횟수: ${correct}회, 틀린횟수: ${wrong}회`);
    break;
  }
  if (question === answer) {
    alert(`정답입니다.`);
    correct++;
  } else {
    alert(`오답입니다.`);
    wrong++;
  }
}
