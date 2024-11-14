//========= 전역 변수 영역 ========//


// 서버와 통신할 데이터
const todos = [
  {
    id: 1,
    text: '장보기',
    done: false,
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
const $todoListUl = document.querySelector('.todo-list');

//========= 함수 정의 영역 ========//

// todos배열을 화면에 렌더링해주는 함수
function renderTodos() {
  // 1. todos를 반복한다.
  todos.forEach(todo => {
    // 2. li태그를 생성한다.
    const $li = document.createElement('li');
    // 3. li태그에 들어갈 속성들을 설정한다.
    $li.classList.add('todo-list-item');
    $li.dataset.id = todo.id;
    // 4. li태그의 자식 태그들을 한번에 삽입한다.
    $li.innerHTML = `
      <label class="checkbox">
        <input type="checkbox">
        <span class="text">${todo.text}</span>
      </label>
      <div class="modify"><span class="lnr lnr-undo"></span></div>
      <div class="remove"><span class="lnr lnr-cross-circle"></span></div>
    `;
    // 5. 이미 완료된 할 일은 체크처리하기 
    const $checkbox = $li.querySelector('input[type=checkbox]');
    $checkbox.checked = todo.done;

    // 6. ul에 li 추가하기
    $todoListUl.append($li);
  });
}

//========= 코드 실행 영역 ========//

/*
  - todos배열에 있는 객체들을 화면에 그려야 함
*/
renderTodos();