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



// // ---------------------------------------

// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Привет, Vue.js!'
//   },
//   methods: {
//     clickMeEvent() {
//       this.message += ' click'
//     }
//   }
// })

// // ---------------------------------------

// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Привет, Vue!',
//     result: 'RESULT'
//   }
// })

// // ---------------------------------------

// // ---------------------------------------

// Vue.component('todo-item', {
//   props: ['struct'],
//   template: `<li>{{ struct.id }} | {{ struct.value }}</li>`
// })

// var app7 = new Vue({
//   el: '#app-7',
//   data: {
//     value: 'example val',
//     list: [
//       12,
//       24,
//       35,
//       14
//     ]
//     // value: [1, 6, 7, 9],
//     // value: 20
//   }
// })