// function initHandlers() {
//     var popup = document.querySelectorAll('.add_item'),
//         // pattern = document.querySelector('#board__pattern'),
//         // content = document.querySelector('.content');
//         // boardTaskList = document.querySelector('.board__task-list');

//         popup.addEventListener('click', function(event) {

//             console.log(popup);
//             openPopUp();
//         // var result = boards.addBoard(flow.model.data, {
//         //     pattern: pattern,
//         //     boardTaskList: boardTaskList,
//         //     target: content
//         // });

//         // if (result) {
//         //     // updateData(flow.model);
//         // } else {
//         //     // errorPopup();
//         // }
//         // initTaskHandlers();
//     });
// }
    
function openPopUp() {
    var popup = document.querySelectorAll(".add_item");
    popup.classList.toggle("show");
}

    function Modal() {
        this.element = document.createElement('div');

        this.element.className = 'modal';
    }

    Modal.prototype.show = function() {
        document.body.appendChild(this.element);
    }
    Modal.prototype.hide = function() {
        document.body.removeChild(this.element);
    }
    Modal.prototype.setContent = function(html) {
        this.element.innerHTML = html;
    }

    var modal = new Modal();
        modal.setContent('<h4>Это модальное окно</h4>');
    

    // <br /><div style='text-align: right;'><a onmouseover='this.style.cursor="pointer" ' style='font-size: 12px;' onfocus='this.blur();' onclick="document.getElementById('PopUp').style.display = 'none' " ><span style="text-decoration: underline;">закрыть</span></a></div>