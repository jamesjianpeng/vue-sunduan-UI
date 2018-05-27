import Vue from 'vue';
import App from './App.vue';

const [a, b , ...c] = [1, 2 ,3 , 4, 5]

var scriptTag = document.body.lastChild

var app = document.createElement('div')
app.id = 'app'

document.body.insertBefore(app, scriptTag)

new Vue({
  el: '#app',
  render:h => h(App)
})
