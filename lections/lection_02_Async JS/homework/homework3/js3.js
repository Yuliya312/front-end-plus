// Создать страницу с youtube видео. В шапке есть поле для ввода url. После ввода ссылки
//  и нажатии на кнопку "add" - видео добавляется на страницу в ряд. Когда перезагружаешь 
//  страницу - все видео должны остатся в списке. Изначальное каждое видео должно быть на 
//  паузе (читаем youtube API). Вся страница служит для временного хранения видео, 
//  которы вы запланировали посмотреть. Есть также кнопка - очистить всё.

console.log(10);

window.onload = function() {

    var btnAddLocal = document.querySelector('#local_add'),
        video_header =  document.querySelector('.video_header')
        videoList = document.querySelector('#collection');
        console.log(btnAddLocal);
        console.log(videoList);  

        // function setVideoData(){
        //     localStorage.setItem('list', 'https://www.youtube.com/embed/M3GaKtQChF8');
        //     // console.log(localvalue);
        // }

        // function getVideoData(){
        //     let localvalue = localStorage.getItem('list');
        //     console.log(localvalue);
        // }

        // setVideoData();
        // getVideoData();
    // var i = j = 0;
    btnAddLocal.addEventListener('click', function(){
        // var videoData = getVideoData() || {};
        let value = document.querySelector('#input_url').value;
        let list = JSON.parse(window.localStorage.list);
        list.push(value);
        window.localStorage.list = JSON.stringify(list);
        console.log(list);

        render();
    });

    function render(){
        window.localStorage.list = window.localStorage.list || JSON.stringify([]);
        // console.log(videoList.children);
        console.dir(videoList);
        // var video = {
        //     id: list.lastBoardId,
        //     name: 'Item_' + list.lastBoardId,
        //     tasks: []
        // };

        // newVideo.url=list.value;
        var listLocal = JSON.parse(window.localStorage.list);
        var newVideo = document.createElement('iframe');
        newVideo.url = listLocal.value;   
        videoList.appendChild (newVideo);
        console.dir(newVideo);
        // getVideoData();
        // for(var item in listLocal){
        //     localList.innerHTML += listLocal[item] + "<br/ >"
        // }
    }

    // render();

    function getVideoData(){
        // let localvalue = JSON.parse(localStorage.getItem('list');

        return JSON.parse(localStorage.getItem('list'));
      }
      console.log(getVideoData());
        // function getVideoData(){
//     let localvalue = localStorage.getItem('list');
//     console.log(localvalue);
// }

    function setVideoData(o){
        console.log(o);
    localStorage.setItem('url', JSON.stringify(o));
    // return false;
    }

}


// function addBoard(list, options) {
//     list.lastBoardId++;

//     var board = {
//         id: list.lastBoardId,
//         name: 'Item_' + list.lastBoardId,
//         tasks: []
//     };
//     // if (errors){
//     // return false;
//     // }
//     list.boards.push(board);
//     _renderBoard(options.pattern, board, options.target);

//     return true;
// }

    function addBoardf() {
    
        var content = document.querySelector('.content');
        var newBoard = document.createElement('div');
        newBoard.className = 'board';
        var newBoards = content.querySelector('#newBoards');
        content.insertBefore(newBoard, newBoards);
        var board = document.querySelectorAll('.board');
        for(var i=0;i<board.length;i++) {
        board[i].dataset.counter = i;
        }
        // var board = document.querySelectorAll('.board');
        console.dir(board);
        addPlusBtn();
        plusBtn();
            function addPlusBtn() {
                var plusAdd = document.createElement('div');
                plusAdd.className = 'plus';
                plusAdd.innerHTML = '&#10010;';
                newBoard.appendChild(plusAdd);
                // console.dir(plusAdd);
            }
        // var board = document.querySelectorAll('.board');
        // console.dir(board);
    }

