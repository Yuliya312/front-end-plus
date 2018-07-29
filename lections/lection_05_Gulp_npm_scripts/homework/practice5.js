// 1) Реализовать сборку языковых файлов (`*_{ln_code}.js`), которые имеют вид модуля с константой - объектом внутри. Использовать node.js скрипт.
//         main_RU.js
//         const = {
//             "main_head_title": "Название компании"
//         }

//         main_EN.js
//         const = {
//             "main_head_title": "Company name"
//         }

//         // all
//         {
//             RU: {
//                 "main_head_title": "Название компании"
//             },
//             EN: {
//                 "main_head_title": "Company name"
//             }
//         }
let fs = require('fs');
let ru = require('./languages/main_RU.js');
let ru = require('./languages/main_EN.js');

// console.log(process.env);

var path = './front-end-plus/lections/lection_05_Gulp_npm_scripts/homework';
fs.readdir(path + '/languages', function(err, items){
    if (err){
        console.log(err);

        return err;
    }

    console.log(items);
    console.log(ru);
    items.forEach(item => {
        if (item.indexOf('.') == -1) {
            fs.readdir(`./${item}`, function(err, values){
                if(err) {
                    return;
                }

                console.log(item, values);
                
               fs.readFile(path + '/languages', 
                function(err, data){
                console.log("Асинхронное чтение файла");
                if(err) {
                    return;
                }
                console.log(data);  // выводим считанные данные
});
            //    let read =  fs.readFileSync(values);
            //    console.log(read);
            });
        }
    })
});

