<template>
    <div class="container">
        <h1>List of fetch posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.id"> {{post.title}} </li>
        </ul>
    </div>
</template>

<script>
// import { fetchPosts } from './Api';
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
    }
}
</script>