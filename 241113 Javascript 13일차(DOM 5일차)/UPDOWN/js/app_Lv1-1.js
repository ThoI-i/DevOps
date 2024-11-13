// 아이콘이 들어갈 컨테이너
const $numbers = document.getElementById('numbers');

// 숫자 아이콘 100개 생성
for (let i = 1; i <= 100; i++) {
  const $div = document.createElement('div');
  $div.classList.add('icon');
  $div.textContent = i;

  $numbers.append($div);
}

// 아이콘 클릭 이벤트 등록
$numbers.addEventListener('click', e => {
  if (!e.target.matches('.icon')) {
    return;
  }
});