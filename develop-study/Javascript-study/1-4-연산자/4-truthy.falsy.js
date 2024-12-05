// truthy, falsy : js는 논리가 아닌 데이터를 논리로 표현할 수 있다
// 0, '', null, undefined, NaN - false로 취급한다. 나머지는 전부 true
if (true) console.log('참입니다1');
if (0) console.log('참입니다2'); // false
if (100) console.log('참입니다3');
if (-999) console.log('참입니다4');
console.log('==========================');
if (false) console.log('참입니다5');
if (0) console.log('참입니다6');
if (null) console.log('참입니다7');
if (undefined) console.log('참입니다8');
if (NaN) console.log('참입니다9');
if ('') console.log('참입니다10');
if (' ') console.log('참입니다11'); // true
if ('hellow') console.log('참입니다12'); // true
if (-100.999) console.log('참입니다13'); // true
if ([1,2,3]) console.log('참입니다13'); // true
if (function(){}) console.log('참입니다13'); // true
