Vue.component("v-dialog", {
    template: "#popup__template",
    data: function(){
        return {
            active: false
        }
    },
    props: ['btnText'],
    methods: {
        open: function() {
            this.active = true
        },
        close: function() {
            this.active = false
        },
        onCancel: function() {
            this.close();
        }
    }
})

var app = new Vue({
    el: "#app"
})

// --2-- vanila js
var modal = document.querySelector("#my__modal"),
    btn_openModal = document.querySelector("#open__modal"),
    btn_closeModal = document.querySelector("#close");
    // console.log(modal, btn_openModal, btn_closeModal);
    
    btn_openModal.addEventListener("click", function(){
        modal.style.display = "block";
    })

    btn_closeModal.addEventListener("click", function(){
        modal.style.display = "none";
    })

    window.addEventListener("click", function(event){
        if(event.target == modal) {
            modal.style.display = "none";
        }
    })