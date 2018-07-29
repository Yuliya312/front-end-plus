window.onload = function() {
    this.goodsList = {};
    // var obj = {};
    getData();
    // console.log(goodsList);
    // console.log(itemBox);
}
    
    function getData() {
        fetch('http://localhost:3780/goods', {
            method: 'get'
        })  
        .then(response => {
                return response.json();
        })
        .then(response => {
            renderTemplate(response.data);
        })
    }

    function renderTemplate(data) {
        var pattern = document.querySelector('#pattern_item_box'),
            container = document.querySelector('.container');     

        itemBox.render(data.list, pattern, container);
    }
    
    (function() {
        window.itemBox = {
            render: render

        };
        
        function render(list, pattern, container) {
            console.log(list);
            console.log(pattern);
            list.forEach(item => {
                // console.log(item);

                let newItemboxNode = pattern.cloneNode(true);        
            // console.log(itemCard);
                newItemboxNode.id = '';
            //     // newItemboxNode.dataset.id = list.id; 
                let title = newItemboxNode.querySelector('.item_title'),
                    price = newItemboxNode.querySelector('.item_price'),
                    img = newItemboxNode.querySelector('.img'),
                    btn = newItemboxNode.querySelector('.add_item');

                btn.addEventListener('click', addToCart);
                btn.dataset.id = item.id;

                if (title) {
                    title.innerHTML = item.title;
                }
                // console.dir(price);
                if (price) {
                    price.innerHTML = item.price;
                }
                // console.dir(img);
                if (img) {
                    img.src = item.img;
                }
                container.appendChild(newItemboxNode);
            let itemCard = new ProductCard(`${title}`, `${price}`, `${img}`);
                // console.dir(itemCard);
            // console.log(itemCard);
            });
        }
        let obj = {}
        function renderCart(){
            let cartData = getCartData();
            console.log(cartData);
            var pattern = document.querySelector('#pattern_item_box'),
                amountBlock = document.querySelector('#cart_amount_pattern');

            let newItemboxNode = pattern.cloneNode(true);
                amountBlockNode = amountBlock.cloneNode(true);

            let cart = document.querySelector('.item_cart_block'),                
                title = newItemboxNode.querySelector('.item_title'),
                price = newItemboxNode.querySelector('.item_price'),
                img = newItemboxNode.querySelector('.img');
                
                newItemboxNode.id = '';
                amountBlockNode.id = '';
                // newItemboxNode.dataset.id = list.id; 
                itemCartBox = document.createElement('div');
                itemCartBox.classList.add('item_cart_box');
                
            for(var item in cartData){
                if (title) { 
                    title.innerHTML = cartData[item]["title"];
                    // console.log(cartData[item]["title"]);
                }
                // console.dir(items);
                if (price) {
                    price.innerHTML = cartData[item]["price"];;
                }
                // console.dir(img);
                if (img) {
                    img.src = cartData[item]["img"];
                }
                newItemboxNode.dataset.id = cartData[item]["id"];
                let removeBtn = newItemboxNode.querySelector('.add_item');
                    if (removeBtn) {
                        newItemboxNode.removeChild(removeBtn);
                    }

            }
            
            console.log(newItemboxNode.dataset.id);
            console.dir(cart); 
            if(newItemboxNode.dataset.id) {
                cart.appendChild(itemCartBox);
                itemCartBox.appendChild(newItemboxNode);
                itemCartBox.appendChild(amountBlockNode);
            }
            let cartItems = document.querySelectorAll('.item_cart .item_box');
            console.log(cartItems);

            cartItems.forEach(item => {
                console.log(cartItems); 
            })

                        // console.log(cartItemsId);                 
    }

        function addToCart() {
            console.dir(this);
            
            var cartData = getCartData() || obj,
                parentBox = this.parentNode;
                itemId = this.getAttribute('data-id'),
                itemTitle = parentBox.querySelector('.item_title').innerHTML,
                itemImg = parentBox.querySelector('img').src,
                itemPrice = parentBox.querySelector('.item_price').innerHTML;

            if(obj.hasOwnProperty(itemId)){ 
                obj[itemId].quantity += 1;
            } else { 
                obj[itemId] = {};
                obj[itemId].title = itemTitle;
                obj[itemId].img = itemImg;
                obj[itemId].price = itemPrice;
                obj[itemId].id = itemId;
                obj[itemId].quantity = 1;
                console.log(obj);
            }
            if(!setCartData(obj)){ // Обновляем данные в LocalStorage
                // this.disabled = false; // разблокируем кнопку после обновления LS
            }
        }

        function getCartData(obj) {
            return JSON.parse(localStorage.getItem('cart'));
        }

        function setCartData(obj){
            console.log(obj);
            localStorage.setItem('cart', JSON.stringify(obj));
            return false;
          }

        function openCart() { 

            let btnOpenCart = document.querySelector('#open_cart'),
                btnCloseCart = document.querySelector('#close_cart'),
                btnClearCart = document.querySelector('#clear_cart'),
                dialog = document.querySelector('dialog'),
                modalWraper = document.querySelector('.modal_wrapper');

                // console.dir(modalWraper);

            btnOpenCart.onclick = function() {
                dialog.show();
                renderCart();
                modalWraper.style.visibility = "visible";
                // console.log(btnOpenCart);
            };

            btnCloseCart.onclick = function() {
                dialog.close();
                modalWraper.style.visibility = "hidden";
            };

            btnClearCart.onclick = function() {
                localStorage.clear();
                // item_cart.innerHTML = '';
            };
            var cartData = getCartData(), 
                item_cart = document.querySelector('.cart_item_box');
                console.log(getCartData());
        }

        openCart();

        function testGetData() {
            return new Promise((resolve, reject) => {
                var xhr = new XMLHttpRequest();
            
                xhr.onreadystatechange = function(){
                    if(xhr.readyState != 4) 
                        { return; }
                        if (xhr.status!=200) {
                        reject(console.log('makeIndexedDB'));
                    }
                    // resolve(xhr.responseText);
                    reject(xhr.responseText);
                }
                xhr.open('POST', 'http://localhost:3780/order', true);
                xhr.send();
                // xhr.onloadend = function() {
                //     if(xhr.status == 404) 
                //         // throw new Error(url + ' replied 404');
                //         console.log('Error');
                // }
            }); 
        }
        
        function load () {

            let xhr = new XMLHttpRequest();
        
            xhr.open("POST", "http://localhost:3780/order", true);
            let async = new Promise(function(resolve, reject){
                xhr.onreadystatechange = function() {
                    if (xhr.readyState != 4) {
                        return;
                    }
                    if(xhr.status!==200) {
                       reject()
                    }
                    let res =  JSON.parse(xhr.responseText)
                    resolve(res);
                }
            });
        
            xhr.send();
        
            return async;
        }

        load();
        
        function sendOrder() {
            load("POST", "http://localhost:3780/order")
            .then(val=>console.log(val), onReject)
        }

        function onReject() {
            dataBases.connectDB((r)=>console.log(r))
        }
        // sendOrder();
        function makeIndexedDB() {
            console.log('response');
        }

        // testGetData()
        //     .then(response => {
        //     console.log(response);
        // })

        // const DATASERVICE = require('../routes/data.js');

        class DataService {
            static fetch(url) {
              return fetch(url)
                .then(response => response.json())
            }
          }

    	function  orderGoods () {
            const order = document.querySelector('#new_invoice');
        
            order.addEventListener('click', ()=> {
                // DATASERVICE
                sendOrder();
                connectDB(orderGoods);
            }) 
        }
            	 
        orderGoods (); 

        function connectDB(orderGoods){
            var request = indexedDB.open("Goods_DB", 3);
            let cartData = getCartData();
            console.log(cartData);
            request.onerror = function(err){
                console.log(err);
            };
            request.onsuccess = function(){
                orderGoods(request.result);
            }
            request.onupgradeneeded = function(e){
                var data_default = e.currentTarget.result.createObjectStore("goods", { 
                    keyPath: "key",
                    autoIncrement: true
                });
                
                for (let item of cartData) {
                    console.log(list);
                    data_default.add(item);
                }
        
                connectDB(orderGoods);
            }
        }

    })();

class ProductCard {

    constructor(title, size, img) {
        this.title = title;
        this.size = size;
        this.img = img;
    }

}