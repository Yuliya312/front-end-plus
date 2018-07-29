var arr = [ { value: 10 }, { value: 12 }, { value: 3 } , { value: 27 }];
var list = [...arr];

// var res = list.sort(function (a, b) {
//     if (a.value > b.value) {
//       return 1;
//     }
//     if (a.value < b.value) {
//       return -1;
//     }
//     // a должно быть равным b
//     return 0;
// });

var res = list.sort((a, b) => (a.value > b.value) ? 1 : (a.value < b.value) ? -1 : 0);


var keysValues = arr.map(item => item.value);
console.log(arr);
console.log(list);
console.log(keysValues);