
import Vue from 'vue';
import App from './App.vue';
import {selectComponent} from './select/index.js';

console.log(selectComponent, '==-==');

Vue.use(selectComponent);

const createAppId = function() {
  const scriptTag = document.body.lastChild;
  const app = document.createElement('div');
  app.id = 'app';
  document.body.insertBefore(app, scriptTag);
  return '#' + app.id;
};

new Vue({
  el: createAppId(),
  render: (h) => h(App),
});
