// connectDB(function(db) {
//     // console.log(db);    

//     var transaction = db
//                         .transaction(["goods"], "readwrite")
//                         .objectStore('goods');

//     var goodsFromDB = [];
//     console.log(transaction);
//     transaction.openCursor().onsuccess = function(event) {
//         var cursor = event.target.result;

//         console.log(cursor);
//         if (cursor) {
//             goodsFromDB.push(cursor.value);
//             cursor.continue();
//         }
//         else {
//             console.log("Got all customers: ", goodsFromDB);
//         }
//     };
// });

// -------------------------------- default example
// var info = {
//     id: 10,
//     name: 'FooName'
// }
// connectDB(function(db) {
//     var transaction = db.transaction(["goods"], "readwrite")
//      .objectStore('goods');
//     transaction.add(info);
// });


// ---------------------------

// window.onload = function(){
//     document
//         .querySelector('#image-file')
//         .addEventListener('change', function(event){
//             console.log(event, this.files[0])

//             setFile(this.files[0]);
//         });
// }

// function setFile(file){
// 	connectDB(function(db){
//         var request = db
//             .transaction(['goods'], "readwrite")
//             .objectStore('goods').put(file);
// 		// request.onerror = ev => console.log(ev);
// 		request.onsuccess = function(){
// 			return request.result;
// 		}
// 	});
// }