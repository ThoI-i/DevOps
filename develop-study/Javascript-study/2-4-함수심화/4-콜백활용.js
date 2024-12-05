// 요리 레시피를 출력하는 함수
// 함수 파라미터에는 값만 전달할 수 있음 → 코드 전달불가
// 단, 코드를 함수에 싸면 함수값 전달 가능
function makeCook(recipeName, recipeFunction) {
  console.log(`#### 나만의 맛도리 레시피 ####`);
  console.log(`!!! 요리 이름: ${recipeName}`);

  // 핵심 레시피 내용
  // 함수 사용자가 원하는 커스텀 코드
  recipeFunction();

  // 중복 출력 발생
  // console.log(`# step1: 물을 500ml 넣고 끓이세요!`);
  // console.log(`# step2: 물이 끓으면 면과 스프를 넣으세요`);
  // console.log(`# step3: 2분 후 계란을 넣으세요`);
  // console.log(`# step3: 1분 후 파와 청양고추를 썰어서 넣으세요`);
  // console.log(`# step3: 30초간 뜸을 들이세요`);

  console.log(`~~~ 참 쉽죠? 여러분도 따라해보세요!! ~~~`);
  console.log(`======================================`);
}
makeCook(`대파청양고추라면`, function () {
  console.log(`step1: 물을 끼리라~`);
  console.log(`step2: 면 스프 투하`);
  console.log(`step3: 대파 송송탁 청양고추 파지직ㄱ!`);
  let side = `계란`;
  if (side) {
    console.log(`step4: 계란도 넣어`);
  }
});

makeCook('BLT샌드위치', function () {
  console.log('step1: 베이컨 굽기');
  console.log('step2: 상추 썰기');
  for (let i = 0; i < 3; i++) {
    console.log('step3: 참치 다지기');
  }
  console.log('step4: 빵 자르기');
  console.log('step5: 비닐포장하기');
});