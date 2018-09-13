var taskList = new Vue({
  el: '#taskList',
  data: {
    list: [
        1, 2, 3, 4
    ],
  },
    methods: {
        clickMeEvent() {
            var num = this.list.pop();
            taskList2.list.push(num);
            console.log(num);
        }
    }
})

var taskList2 = new Vue({
  el: '#taskList2',
  data: {
    list: [
        
    ]
  },
    methods: {
        clickMeEvent() {
            var num2 = this.list.pop();
            taskList.list.push(num2);
        }
    } 
})

