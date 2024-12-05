let a = 5;   // 5 -> 0101
let b = '5'; // 5 -> 53(10진수)

console.log(a == b); // True -> 문제 발생

console.log(a === b); // False
console.log(a !== b ); // True

console.log('=============================');
console.log('0' == '');
console.log(0 == ''); // True
console.log('0' == 0); // True
console.log(false == 'false');
console.log(false == 0); // True
console.log('=============================');
// 전부 false 나와야함
console.log('0' === '');
console.log(0 === '');
console.log('0' === 0);
console.log(false === 'false');
console.log(false === 0);

console.log('=============================');

//문자 비교
let password = 'abc1234';
console.log(password === 'abc1234');

// 문자 대소 비교 (아스키코드 값 비교)
            //97 > 65
console.log('a' > 'A');
            //65 > 67
console.log('A' < 'C');

console.log('가' > '나'); // 국어사전 표기대로 뒤에 나올수록 큼

            //97 99 //97 100
console.log('ace' > 'ade'); // 영어사진 표기대로 뒤에 나올수록 큼




