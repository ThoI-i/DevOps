let answer = Math.floor(Math.random() * 100);
let countGame = 0;
let win = 0;
let lose = 0;

/* 만약 난이도에 따라 카운트하고 
  난도별 승패를 알고 싶다면 method를 쓰자 */
let normal = 0;
let hard = 0;
let insane = 0

// 숫자 취급하고 싶으면 "+"promt 잊지말자
while (true) {
  let start = +prompt(
    `난이도를 선택하세요!
#[1. 상(3번의 기회) | 2. 중(6번의 기회) | 3. 하(10번의 기회)]`
  );
  let count;
  if (start === 1) {
    count = 3;
    insane++;
  } else if (start === 2) {
    count = 6;
    hard++;
  } else if (start === 3) {
    count = 10;
    normal++;
  } else {
    alert(`1, 2, 3 중 난이도를 선택해주세요`);
    continue; //난이도를 선택하세요! prompt로 돌아감
  }

  while (count > 0) {
    let input = +prompt(`숫자를 입력하세요! [1 ~ 100]`);
    count--;
    if (input < answer) {
      alert(`UP`);
    } else if (input > answer) {
      alert(`Down`);
    } else if (input === answer) {1
      alert(`정답입니다!`);
      win++;
      break;
    } 
    if ( count === 0) {
      lose++;
    alert(`기회가 모두 소진되었습니다. 정답은 ${answer}이었지렁 ㅎㅎㅎ`);
    }
  }
  countGame++;
  
  if (confirm(`한판 더허쉴?`)){
    answer = Math.floor(Math.random() * 100);
    continue;
  }
    else 
    alert(`총 ${countGame}전 ${win}승 ${lose}패입니다.\n다음에 만나요.\nnormal: ${normal} | hard: ${hard} | insane: ${insane}`)
    break;
}