// //문제 1.
// let person = {};
// // 점 표기법을 사용하여 name에 '홍길동' 추가
// person.name = '홍길동';

// // 대괄호 표기법을 사용하여 age에 30 추가
// person['age'] = 30;

// console.log(person.name); // 출력: 홍길동
// console.log(person['age']); // 출력: 30


//문제 2.
// let book = {
//   title: 'JavaScript Guide',
//   author: 'John Doe',
//   year: 2021
// };

// // year를 2022로 수정
// book.year = 2022;

// // publisher 프로퍼티 추가
// book.author = 'Tech Books';

// console.log(book); // 예상 출력: { title: 'JavaScript Guide', author: 'John Doe', year: 2022, publisher: 'Tech Books' }


//문제 3.
let car = {
  brand: 'Toyota',
  model: 'Camry',
  price: 30000,

  showInfo: function() {
    console.log('브랜드: ' + this.brand + ', 모델: ' + this.model + ', 가격: ' + this.price);
  }
};

// 메서드 실행
car.showInfo(); // 예상 출력: 브랜드: Toyota, 모델: Camry, 가격: 30000
