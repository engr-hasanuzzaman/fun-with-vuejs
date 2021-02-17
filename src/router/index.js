import Vue from 'vue'
import Router from 'vue-router'
import Todos from '../components/Home';
import PostsPage from '../components/post/Index';

Vue.use(Router)

const routes = [
    { path: '/', component: PostsPage },
    { path: '/posts', component: PostsPage, name: "PostPath" },
    { path: '/todos', component: Todos, name: "TodosPath"},
 ];
 
export default new Router({
  routes,
  mode:'history',
})