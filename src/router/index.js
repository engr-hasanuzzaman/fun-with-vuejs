import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home';
// import PostsPage from '../components/post/Index';

Vue.use(Router)

const routes = [
    { path: '/', component: Home },
    // { path: '/posts', component: PostsPage },
    // { path: '/', component: PostsPage },
 ];
 
export default new Router({
  routes
})