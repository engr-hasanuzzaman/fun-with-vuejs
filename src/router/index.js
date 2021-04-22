import Vue from 'vue';
import Router from 'vue-router';
import Todos from '../components/Home';
import PostsPage from '../components/post/Index';
import NewPost from '../components/post/Form';
// import Home from '../components/Ho'
Vue.use(Router)

const routes = [
    { path: '/', component: PostsPage },
    { path: '/posts', component: PostsPage, name: "PostPath" },
    { path: '/posts/new', component: NewPost, name: "PostNew" },
    { path: '/todos', component: Todos, name: "TodosPath"},
    { path: '/home', component: Todos, name: "TodosPath"},
 ];
 
export default new Router({
  routes,
  mode:'history',
  linkActiveClass: 'bg-gray-900',
})