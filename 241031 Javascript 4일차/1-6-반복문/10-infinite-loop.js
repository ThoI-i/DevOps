// 무한 루프
// 영원히 끝나지 않는 반복문 - 악성코드
// 정확한 반복횟수를 사전에 파악 불가능하여
// 일단 무한으로 돌려 놓고 탈출조건을 설정

while (true) {
  let n = prompt('정수: ');
  if (n === '그만') break;
  if (n === 'ㅋㅋㅋ') {
    alert('뭘 웃어?');
    continue;
  }
  alert(n);
}
alert('안녕히 계세요!');