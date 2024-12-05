/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. 변수에 배열 ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수']을 저장하세요.   
2. 사용자에게 수정할 멤버 이름과 새로운 이름을 입력받고 
  해당 멤버를 수정한 뒤 수정 완료 후의 배열을 출력해서 보여주세요.
3. 배열에 없는 이름을 입력하면 'xxx는 잘못된 이름입니다.'라고 출력한 후 
   다시 수정할 이름을 입력할 수 있도록 하세요.
4. 한 명의 멤버를 정확하게 수정할때까지 프로그램은 계속되어야 합니다.
*/
let tvxq = ["유노윤호", "최강창민", "영웅재중", "믹키유천", "시아준수"];

while (tvxq.length !== 0) { // 2번 방법 루프의 명칭을 붙여서 해당 루프를 break 시킴
  let start = prompt(
    `현재 멤버: [${tvxq}]\n메뉴를 선택하세요.\n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 프로그램 종료`
  );
  switch (start) {
    case `1`: case `추가`:
      let addMember = prompt(`추가할 새로운 맴버의 이름을 입력하세요!`);  
      tvxq.push(addMember);
      alert(`${addMember}이(가) 추가되었습니다.`);
      break;
    case `2`: case `삭제`:
      while (true){
      let deleteMember = prompt(`삭제할 맴버를 입력하세요!`);
      if (tvxq.includes(deleteMember)) {
        let index = tvxq.indexOf(deleteMember);
        tvxq.splice(index,1);
        alert(`${deleteMember}이(가) 삭제되었습니다.`);
        break;
      } else {
        alert(`${deleteMember}는 잘못된 이름입니다.`)
        continue;
      }
    }
      break;
    case `3`: case `종료`:
      alert(`프로그램을 종료합니다.`);
      // tvxq.length = 0; // 1번 방법
      break;
    default:
      alert(`${start}은(는) 잘못된 입력입니다.\n1, 2, 3 중에서 입력해주세요.`);
  }
}
