let list = [];

let res1 = function sum(a=4, b=6) {
    console.log('in');
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(a + b);
      }, 500);
    });
  }

  let res2 = function multiply(a=14, b=6) {
    console.log('in');
    return new Promise(resolve => {
        // console.log(resolve);
      setTimeout(() => {
        resolve(a * b);
      }, 1500);
    });
  }

  let res3 = function minus(a=4, b=16) {
    console.log('in');
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(a - b);
      }, 2500);
    });
  }

list = [res1, res2, res3];

function runAsyncAll(list, async) {
    if(async == true) {
        Promise
            .all([res1(), res2(), res3()])
            .then(function(list){
                console.log(list);
            }) 
    } else { runAsync();}
 
async function runAsync() {
    let a = await res1(4,6);
    let b = await res2(14,6);
    let c = await res3(4,16);

    console.log([a, b, c]);

        return [
            await res1(4,6), 
            await res2(14,6),
            await res3(4,16)
        ];
}
}    

runAsyncAll(list, true);
runAsyncAll(list, false);



    // 1. Создать функцию runAsyncAll(list, async), которая принимает массив функций 
    // с асинхронными операциями и параметр async. Если async == true, то все функции 
    // запускаются параллельно и runAsyncAll возращает массив результатов (от всех 
    // асинхронных операций). Если async == false, то все функции запускаются 
    // синхронно по порядку, и runAsyncAll возращает массив результатов 
 