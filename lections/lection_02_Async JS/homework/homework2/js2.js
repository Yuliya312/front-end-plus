// 2. Используя github API делаем запрос на ресурс: https://api.github.com/orgs/hillel-front-end
    
// Создаем простой интерфейс (в виде таблицы) с следующими данными.

// На главной отображается список все репозиториев
// В правом верхнем углу - логотип организации
// Вывести default branch для каждого репозитория
// Дату последнего update
// Список языков, которые используются в репозитории
// Рекоменудю использовать Postman. Реализовывать следует используя фичи ES6

window.onload = function() {
    this.repo = {};
    repo.arr = {};
    // repo.callbacks = [getData];
    // repo.callbacks.forEach(element => {
    //     element();
    // });
    console.log(repo);
    // console.log(itemBox);
    getData();
    console.log(repo);
}

function getData() {
    fetch('https://api.github.com/orgs/hillel-front-end', {
        method: 'get'
    }).then(response => {
            return response.json();
        })
        .then(response => {
            repo = response.repos_url;
            console.log(repo);
            getRepo(repo);
        })        
}

function getRepo(repo) {
    fetch(repo, {
        method: 'get'
    }).then(response => {
            //  console.log(response);
            return response.json();
        })
        .then(response => {
            console.log(response);
            renderTemplate(response);
        })       
}


function renderTemplate(data) {
    var table = document.querySelector('.table'),
        tdata = document.querySelector('tbody');
        // console.log(table);
        // console.log(tdata);
        // render(data, table, tdata);
        data.forEach(item => {
            // console.log(item);
            tbody.render(data, table, tdata);
        });

}

(function() {
    window.tbody = {
        render: render
    };
    
    // function render(data, table, tdata) {
    //     console.log(data,  table, tdata);
    //     repo.arr.forEach(list => {
    //         console.log(list);
    //         // _renderItembox(options.pattern, list, options.target);
    //     });
    // }

    function render(data, table, tdata) {

        var repoNames = [];

        console.log(repoNames);

        let newTr = document.createElement('tr');
        newTr.className = 'tr';
        // tdata.appendChild(newTr);
        // console.dir(newTr);

        let newTd = document.createElement('td');
        let allTr = tdata.querySelectorAll('tr');
        console.log(allTr);
        // allTr.forEach(item => {
        //     item.appendChild(newTd);
            
        //     // repoNames.forEach(item => {
        //     //     newTd.innerHTML = item;
        //     // })
        //     // newTd.innerHTML = `${repoNames[item]}`
        //     console.dir(newTd);
        // })

        data.forEach(item => {
            tdata.appendChild(newTr);
            newTr.appendChild(newTd);
            newTd.innerHTML = item.name;
            // repoNames.push(item.name);            
        })
        // let newItemboxNode = pattern.cloneNode(true);        
        // // console.log(itemCard);
        //     newItemboxNode.id = '';
        // //     // newItemboxNode.dataset.id = list.id; 
        //     let title = newItemboxNode.querySelector('.item_title'),
        //         price = newItemboxNode.querySelector('.item_price'),
        //         img = newItemboxNode.querySelector('.img');
        //     if (title) {
        //         title.innerHTML = item.title;
        //     }
        //     // console.dir(price);
        //     if (price) {
        //         price.innerHTML = item.size;
        //     }
        //     // console.dir(img);
        //     if (img) {
        //         img.src = item.img;
        //     }
        //     target.appendChild(newItemboxNode);
        // let itemCard = new ProductCard(`${title}`, `${price}`, `${img}`);
        // console.log(data);
        // console.log(table);
        // console.log(tdata);
    }
})();