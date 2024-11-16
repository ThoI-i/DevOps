    // 검색어에 맞는 음식들을 서버에서 가져와서 화면에 렌더링
    function searchFoods(query) {
      console.log('서버에 검색데이터 요청중...');
      
      // 배열에서 검색어가 포함된 음식이름들만 필터링
      const filteredFoods = foodItems.filter(food => food.includes(query));

      if (filteredFoods.length > 0) {
        // 이전 검색 결과를 지우기
        $results.innerHTML = '';
        filteredFoods.forEach(food => {
          const $div = document.createElement('div');
          $div.classList.add('result-item');
          $div.textContent = food;
          $results.append($div);
        });
      } else {
        $results.textContent = '일치하는 음식이 없습니다.';
      }
    }

// 디바운스 함수 정의
    function debounce(callbackFn, delay) {
      let timerId = null; 

      return function (...param) {
        clearTimeout(timerId); // 기존 타이머가 있다면 해제
        timerId = setTimeout(() => {
          // 실행해야할 코드
          callbackFn(...param);
        }, delay);
      };
    }

    // 강사님 코드 ...param인 이유
    function foo(a, b, c) {
    }
    const bar = debounce(foo, 1000);
    bar(1,2,3);
////

    // 검색시 실행될 이벤트 핸들러
    function searchHandler(e) {
      //검색어
      const query = e.target.value;
      // 검색을 수행
      // 입력 후 1초 후 검색 수행
      searchFoods(query);
    }

    $searchInput.addEventListener('input', debounce(searchHandler, 1000));
    $searchInput.addEventListener('input',  (e) => {
      clearTimeout(timerId); // 기존 타이머가 있다면 해제
      timerId = setTimeout(() => {
        // 실행해야할 코드
        searchHandler(e);
      }, 1000);
    });

    $node.addEventListener('click', (e) => {
      
    });

// $searchInput.addEventListener('input', debounce(searchHandler, 1000));
// 1. input이 발생할 때마다 이벤트 발생 debounce(searchHandler, 1000)
// 2. debounce(searchHandler, 1000) <=> debounce(callbackFn, delay)
// 2의 좌항 searchHandler <=> function searchHandler(e) 함수
// function searchHandler(e)함수는 입력값을 query에 넣고 searchFoods(query) 함수로 전달
// function searchFoods(query)함수는 query(검색어) 필터링