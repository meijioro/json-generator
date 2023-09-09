import Vue from 'vue';
import Router from 'vue-router';
import JsonFile from './pages/Json';
import Override from './pages/Override';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'jsonfile',
    component: JsonFile
  }, { 
    path: '/override',
    name: 'override',
    component: Override
  }]
});