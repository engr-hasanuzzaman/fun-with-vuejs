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
import { fetchPosts } from './Api';
import Header from '../Header';

export default {
    name: "PostsPage",
    data() {
        return {
            posts: [],
        }
    },
    created: async function () {
        const posts = await fetchPosts();
    /* eslint-disable no-debugger */
        // debugger;
        this.posts = [...this.posts, ...posts];
    },
    components: {
        Header
    }
}
</script>