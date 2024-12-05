//========= 전역 변수 영역 ========//


// 서버와 통신할 데이터
const todos = [
  {
    id: 1,
    text: '장보기',
    done: true,
  },
  {
    id: 2,
    text: '점심 메뉴 정하기',
    done: false,
  },
  {
    id: 3,
    text: '게임하기',
    done: true,
  },
];

//========= DOM 가져오기 영역 ========//


//========= 함수 정의 영역 ========//

// todos배열을 화면에 렌더링해주는 함수
function renderTodos() {
  // 1. todos를 반복한다.
  todos.forEach(todo => {
    console.log(todo);
  });
  // 2. li태그 생성
  const $li = document.createElement('li');
  // 3. li태그에 들어갈 속성을 설정
  $li.classList.add('todo-list-item');
  $li.dataset.id = todo.id;
  // 4. li태그의 자식 태그들을 한번에 삽입
  $li.innerHTML = `
<li data-id="3" class="todo-list-item">
<label class="checkbox">
    <input type="checkbox">
    <span class="text">${todo.text}</span>
</label>
<div class="modify"><span class="lnr lnr-undo"></span></div>
<div class="remove"><span class="lnr lnr-cross-circle"></span></div>
</li>  
  `
  console.log($li);
  
}

//========= 코드 실행 영역 ========//

/*
  - todos배열에 있는 객체들을 화면에 그려야 함
*/
renderTodos();