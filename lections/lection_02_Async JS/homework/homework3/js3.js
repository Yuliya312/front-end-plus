// Создать страницу с youtube видео. В шапке есть поле для ввода url. После ввода ссылки
//  и нажатии на кнопку "add" - видео добавляется на страницу в ряд. Когда перезагружаешь 
//  страницу - все видео должны остатся в списке. Изначальное каждое видео должно быть на 
//  паузе (читаем youtube API). Вся страница служит для временного хранения видео, 
//  которы вы запланировали посмотреть. Есть также кнопка - очистить всё.

window.onload = function() {

    const inputUrl = document.querySelector('#input_url'),
          btnAddLocal = document.querySelector('#local_add'),
          btnClear = document.querySelector('#clear'),
          videoList = document.querySelector('#collection');
        // console.log(btnAddLocal);
        // console.log(videoList);  
            btnClear.addEventListener('click', clear);
            btnAddLocal.addEventListener('click', addVideoUrl);

        let list = JSON.parse(localStorage.getItem("list")) || [];
            render();
            
            function addVideoUrl(){
                let url = inputUrl.value;
                let videoId = url.slice(url.length - 11);
                console.log(videoId);

                    list.push(videoId);
                    localStorage.setItem("list", JSON.stringify(list));

                console.log(list);

                render();
            }

            function render(){    
                    // console.log(list);

                    if(list) {
                        list.map(item => {
                        let    newVideo = document.createElement('iframe');
                        videoList.appendChild (newVideo);
                        newVideo.src=`https://www.youtube.com/embed/${item}`;
                        newVideo.style=`height="300px"frameborder="0"allow="autoplay" 
                                        encrypted-media "allowfullscreen`;                                
                        }).join("")   

                    } else {
                        videoList.innerHTML = "NO DATA";
                    }
                    console.dir(videoList);
                }

            function clear() {
                localStorage.clear();
                render();
            }
}




