var app = new Vue({
    el:"#app",
    data: {
        text: "SOME TEXT",
    },
    methods: {
        someText: function(event) {
            this.text = event.target.value   
        }
    }
});

var tableVue = new Vue({
    el: "#table",
    data: {},
    methods: {

    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Привет, Vue!'
    }
  })