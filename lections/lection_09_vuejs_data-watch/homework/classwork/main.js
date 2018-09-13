var form = new Vue({
  el: '#countries',
  data: {
    selected: '',
    list: [
    "Украина",
    "Венгрия",
    "Польша"
  ]},
  
})

var city = new Vue({
  el: '#cityForm',
  data: { 
    selected: "Украина",
    cityList: [
    "Kyiv",
    "Lviv",
    "Odessa",
    "Kharkiv"
    ]
  }
})

