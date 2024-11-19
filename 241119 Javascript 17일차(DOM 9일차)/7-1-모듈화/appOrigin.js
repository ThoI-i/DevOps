// 버튼 가져오기
const $btn = document.getElementById('btn');

// 클릭 함수
function clickHandler(e) {
  console.log('click!');  
}

// 버튼에 클릭이벤트 등록
$btn.addEventListener('click', clickHandler);