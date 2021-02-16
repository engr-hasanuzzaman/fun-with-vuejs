<template>
    <div class="container">
        <Header />
        <h1>List of fetch posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.id"> {{post.title}} </li>
        </ul>
    </div>
</template>

<script>
// import { fetchPosts } from './Api';
import Header from '../Header';

export default {
    name: "PostsPage",
    data() {
        return {
            posts: [],
        }
    },
    created: function () {
        // const posts = fetchPosts();
        // this.posts = [...this.posts, ...posts];
    },
    components: {
        Header
    }
}
</script>