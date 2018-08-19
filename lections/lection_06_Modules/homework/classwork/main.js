// 1) Вывести разницу в % между курсом сегодня 
// https://api.privatbank.ua/#p24/exchange и выбранным https://api.privatbank.ua/#p24/exchangeArchive
//     Вывод оформить в виде таблицы.

// 2) Вывести в таблицу курс гривны к доллару за последние N дней.
//     Указать процентную разницу по сравнению с предыдущим днем.

let url = 'https://currate.ru/api/?get=rates&pairs=USDUAH,EURUAH&key=aac518471173b9445761e65a205df7cc';

function getData() {
    fetch(url, {
        method: 'get'
    }).then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response);                                
        })
       
}

getData();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.get('/', function(req, res, next) {
//   // Handle the get for this route
// });

// app.post('/', function(req, res, next) {
//  // Handle the post for this route
// });
