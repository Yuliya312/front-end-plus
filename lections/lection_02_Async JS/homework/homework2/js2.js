// 2. Используя github API делаем запрос на ресурс: https://api.github.com/orgs/hillel-front-end
    
// Создаем простой интерфейс (в виде таблицы) с следующими данными.

// На главной отображается список все репозиториев
// В правом верхнем углу - логотип организации
// Вывести default branch для каждого репозитория
// Дату последнего update
// Список языков, которые используются в репозитории
// Рекоменудю использовать Postman. Реализовывать следует используя фичи ES6

window.onload = function() {
    repo = {};
    repo.arr = {};
    getData();
}

function getData() {
    fetch('https://api.github.com/orgs/hillel-front-end', {
        method: 'get'
    }).then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response);
            let repo = response.repos_url,
                avatar = response.avatar_url;
                console.log(avatar);
                getRepo(repo);
                renderAvatar(avatar);                                 
        })
       
}

function getRepo(repo) {
    fetch(repo, {
        method: 'get'
    }).then(response => {
            console.log(response);
            return response.json();
        })
        .then(response => {
            console.log(response);
            renderTemplate(response);
        })       
}


function renderTemplate(data) {
    const tdata = document.querySelector('tbody');

            tdata.innerHTML += 
            data.map(item=>
                `<tr>
                <td>${item.name}</td>
                <td>${item.default_branch}</td>
                <td>${item.updated_at}</td>
                <td>${item.language}</td>
                </tr>`    
            ).join('')
}

function renderAvatar(avatar) {
    let ava = document.querySelector('.avatar');
        ava.src = avatar;
    console.dir(ava);
    console.log(avatar);
}
