//     // ----------------------- без классов ---------------------
// window.onload = function() {
//     this.goodsList = {};
//     goodsList.data = {};
//     // console.log(goodsList);
//     goodsList.callbacks = [setModel];

//     goodsList.callbacks.forEach(element => {
//         element();
//     });
//     console.log(goodsList);
// console.log(itemBox);
// }

// function setModel() {
//     getData()
//         .then(function(response){
//             goodsList.data = JSON.parse(response);
//             renderTemplate(goodsList.data.list);
//             console.log(goodsList.data);
//         });
// }

// function getData() {
//     return new Promise((resolve, reject) => {
//         var xhr = new XMLHttpRequest();
    
//         xhr.onreadystatechange = function(){
//             if(xhr.readyState != 4) { return; }
//             if (xhr.status!=200) {
//                 reject(xhr);
//             }
//             resolve(xhr.responseText);
//         }
//         xhr.open('GET', 'data.json', true);
//         xhr.send();
//     }); 
// }

// function renderTemplate() {
//     var pattern = document.querySelector('#pattern_item_box'),
//         container = document.querySelector('.container');

//         itemBox.render(goodsList.data, {
//         pattern: pattern,
//         target: container
//     });

// }

// (function() {
//     window.itemBox = {
//         render: render
//     };
   
//     function render(data, options) {
//         // console.log(data.list);
//         data.list.forEach(list => {
//             // console.log(list);
//             _renderItembox(options.pattern, list, options.target);
//         });
//     }

//     function _renderItembox(pattern, item, target) {
//         // console.dir(item);
//         let newItemboxNode = pattern.cloneNode(true);        
//         // console.log(itemCard);
//             newItemboxNode.id = '';
//         //     // newItemboxNode.dataset.id = list.id; 
//             let title = newItemboxNode.querySelector('.item_title');
//             if (title) {
//                 title.innerHTML = item.title;
//             }

//             let price = newItemboxNode.querySelector('.item_price');
//             // console.dir(price);
//             if (price) {
//                 price.innerHTML = item.size;
//             }

//             let img = newItemboxNode.querySelector('.img');
//             // console.dir(img);
//             if (img) {
//                 img.src = item.img;
//             }
//             target.appendChild(newItemboxNode);
//     }
// })();
    // -------------------- с классами --------------------------

window.onload = function() {
        this.goodsList = {};
        goodsList.data = {};
        goodsList.callbacks = [getData];
        goodsList.callbacks.forEach(element => {
            element();
        });
        console.log(goodsList);
        console.log(itemBox);
    }
    
    function getData() {
        fetch('data.json', {
            method: 'get'
        }).then(response => {
                return response.json();
            })
            .then(response => {
                // console.log(list);
                goodsList.data = response;
                renderTemplate(goodsList.data.list);
                console.log(goodsList.data);
                console.log(goodsList.data.list);
            })
            // .catch( alert );
    }

    function renderTemplate() {
        var pattern = document.querySelector('#pattern_item_box'),
            container = document.querySelector('.container');
    
            itemBox.render(goodsList.data, {
            pattern: pattern,
            target: container
        });
    
    }
    
    (function() {
        window.itemBox = {
            render: render
        };
        
        function render(data, options) {
            // console.log(data.list);
            data.list.forEach(list => {
                // console.log(list);
                _renderItembox(options.pattern, list, options.target);
            });
        }
    
        function _renderItembox(pattern, item, target) {
            // console.dir(item);
            let newItemboxNode = pattern.cloneNode(true);        
            // console.log(itemCard);
                newItemboxNode.id = '';
            //     // newItemboxNode.dataset.id = list.id; 
                let title = newItemboxNode.querySelector('.item_title'),
                    price = newItemboxNode.querySelector('.item_price'),
                    img = newItemboxNode.querySelector('.img');
                if (title) {
                    title.innerHTML = item.title;
                }
                // console.dir(price);
                if (price) {
                    price.innerHTML = item.size;
                }
                // console.dir(img);
                if (img) {
                    img.src = item.img;
                }
                target.appendChild(newItemboxNode);
            let itemCard = new ProductCard(`${title}`, `${price}`, `${img}`);
            console.log(itemCard);
        }
    })();

class ProductCardsWindow {
    callbacks2(){
        console.log(this);
    }
}

class ProductCardsContainer extends ProductCardsWindow {
    constructor() {
        super();
        super.callbacks2()
    }
    // render()
   
}

class ProductCard extends ProductCardsContainer{

    constructor(title, size, img) {
        super();
        // super.
        this.title = title;
        this.size = size;
        this.img = img;
    }

}

// <script type="text/javascript" src="js/bundle.js?r=37173634873"></script>
