let members = [`유노윤호`, `최강창민`, `영웅재중`, `믹키유천`, `시아준수`];

while (members.length !== 0) {
  let removeName = prompt(`현재 맴버: [${members}]\n삭제할 이름을 입력하세요.`);
  switch (removeName) {
    case `유노윤호`:
      members.splice(0, 1);
      alert(`삭제 완료!\n현재 맴버: [${members}]`);
      break;
    case `최강창민`:
      members.splice(1, 1);
      alert(`삭제 완료!\n현재 맴버: [${members}]`);
      break;
    case `영웅재중`:
      members.splice(2, 1);
      alert(`삭제 완료!\n현재 맴버: [${members}]`);
      break;
    case `믹키유천`:
      members.splice(3, 1);
      alert(`삭제 완료!\n현재 맴버: [${members}]`);
      break;
    case `시아준수`:
      members.splice(4, 1);
      alert(`삭제 완료!\n현재 맴버: [${members}]`);
      break;
    default:
      alert(`${removeName}은 잘못된 이름입니다.\n다시 입력하세요!`);
  }
}
